import React, { useState, useEffect, useCallback } from "react";
import { TasksTypes } from "types";
import { useActions } from "store";

const TaskItem = React.memo(({ id, task, completedAt, isLocked }: TasksTypes & { isLocked: boolean }) => {
  const [isChecked, setIsChecked] = useState(Boolean(completedAt));
  const { toggleTask } = useActions();

  const toggleTaskNcheck = useCallback(
    (taskId, checked) => {
      const payload = {
        id: taskId,
        completedAt: checked ? Date.now() : null,
      };
      setIsChecked(checked);
      toggleTask(payload);
    }, // eslint-disable-next-line
    []
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    toggleTaskNcheck(id, checked);
  };

  useEffect(() => {
    if (isLocked) toggleTaskNcheck(id, false);
  }, [id, isLocked, toggleTaskNcheck]);

  return (
    <li>
      <label className="task-wrapper" htmlFor={id.toString()}>
        <input
          id={id.toString()}
          type="checkbox"
          checked={isChecked}
          disabled={isLocked}
          onChange={onChange}
        />
        <span className="bullet-text">{task}</span>
      </label>
    </li>
  );
});

export default TaskItem;

TaskItem.displayName = "TaskItem";
