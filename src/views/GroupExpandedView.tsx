import React, { useEffect, useState } from "react";
import { TasksTypes } from "types";
import { useStore, useActions } from "store";
import { initialRoutes } from "router";
import { TaskItem, Link } from "components";
import { getParentTasks, getGroupTasks } from "utils";

type Props = {
  taskGroup: string;
  linkText?: string;
};

const GroupExpandedView = ({
  taskGroup,
  linkText = "all groups",
}: Props) => {
  const { state: { tasks } } = useStore();
  const { addTask } = useActions();
  const [currentTasks, setCurrentTasks] = useState<Array<TasksTypes & { isLocked: boolean }>>([]);
  const [newTask, setNewTask ] = useState('')

  const checkParentTasksStatus = (parentTasks: Array<TasksTypes>) =>
    parentTasks.some(({ completedAt }) => completedAt === null);

  const sendNewTaskObj = () => {
    const tasksLength= tasks.length;
    console.log('from group expanded view',tasksLength,tasks[tasksLength- 1] );
    
    const newTaskObj = {
      id: tasks[tasksLength - 1].id + 1,
      task: newTask,
      group: taskGroup,
      dependencyIds : [],
      completedAt: null,
    }

    console.log(`task ${newTask} is going to be send` );
    
    addTask(newTaskObj);
    setNewTask('');
  }

  useEffect(() => {
    const currentGroupTasks = getGroupTasks(taskGroup, tasks);

    const currentGroupTasksWithStatus = () =>
      currentGroupTasks.map((task: TasksTypes) => {
        const parentTasks = getParentTasks(task, tasks);
        return parentTasks === null
          ? { ...task, isLocked: false }
          : { ...task, isLocked: checkParentTasksStatus(parentTasks) };
      });

    setCurrentTasks(currentGroupTasksWithStatus);
  }, [tasks, taskGroup]);

  return (
    <React.Fragment>
      <div className="header">
        <h1 className="text-capitalize">{taskGroup}</h1>
        <Link to={initialRoutes.home.path} className="btn-link text-uppercase">
          {linkText}
        </Link>
      </div>

      <div >
        <label htmlFor="add" className="text-capitalize bullet-text" >New task</label>
        <input type="text" id="add" value={newTask} onChange={(e)=> setNewTask(e.target.value)}></input>
        <button className="pointer text-capitalize" style={{border: '1px solid black'}} onClick={sendNewTaskObj}>+ Add task</button>
      </div>

      <ul className="todo-list">
        {currentTasks.map(props => <TaskItem key={props.id} {...props} />)}
      </ul>
    </React.Fragment>
  );
};

export default GroupExpandedView;

GroupExpandedView.displayName = "GroupExpandedView";
