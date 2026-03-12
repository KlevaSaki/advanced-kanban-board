type Priority = "Low" | "Medium" | "High";

export type Task = {
    id: string;
    title: string;
    description: string;
    columnId: string;
    priority: Priority;
}

export type Column = {
    id: string;
    title: string;
    taskIds: string[]
}

export type Board = {
    id: string;
    title: string;
    columnIds: string[];
}

export type KanbanState = {
    boards: Record<string, Board>;
    columns: Record<string, Column>;
    tasks: Record<string, Task>
}

export type MoveTaskPayload = {
    taskId: string;
    newColumnId: string
}