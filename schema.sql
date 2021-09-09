CREATE TABLE IF NOT EXISTS task_groups 
(
    group_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    group_name VARCHAR(30) NOT NULL,
    CONSTRAINT PK_task_groups
);

CREATE TABLE IF NOT EXISTS tasks 
(
    task_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    task_name VARCHAR(120) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    completed_at TIMESTAMP DEFAULT NULL,
    group_id INT IDENTITY NOT NULL,
    CONSTRAINT PK_tasks,
    CONSTRAINT FK_group FOREIGN KEY (group_id) 
        REFERENCES task_groups(group_id)
);

CREATE TABLE IF NOT EXISTS task_dependencies
(
    parent_task_id INT IDENTITY NOT NULL REFERENCES tasks(task_id),
    dependency_task_id INT IDENTITY NOT NULL REFERENCES tasks(task_id),
    CONSTRAINT FK_task_dependencies 
);

CREATE INDEX IF NOT EXISTS index_parent_task_with_dependendency_tasks
    ON task_dependencies(parent_task_id, dependency_task_id);