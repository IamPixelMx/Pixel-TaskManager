import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useActions } from "store";

const TaskItem = ({ id, task, completedAt, isLocked }) => {
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

  const onChange = (e) => {
    const { checked } = e.target;
    toggleTaskNcheck(id, checked);
  };

  useEffect(() => {
    if (isLocked) toggleTaskNcheck(id, false);
  }, [id, isLocked, toggleTaskNcheck]);

  return (
    <li>
      <label className="task-wrapper" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          disabled={isLocked}
          onChange={onChange}
        />
        <span className="bullet-text">{task}</span>
      </label>
    </li>
  );
};

export default TaskItem;

TaskItem.displayName = "TaskItem";

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  completedAt: PropTypes.number,
  isLocked: PropTypes.bool.isRequired,
};
