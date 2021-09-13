export type TasksTypes = { id: number; group: string; task: string; dependencyIds: Array<number>; completedAt: number | null; };

export type TaskGroupTypes = { groupName: string; tasksCompleted: number; totalTasks: number; toPath: string; };
