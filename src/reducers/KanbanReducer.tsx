import type { KanbanState, MoveTaskPayload, Task } from "../types/kanbanTypes";

type Action = 
    | { type: "ADD_TASK"; payload: Task}
    | { type: "MOVE_TASK"; payload: MoveTaskPayload}

export function kanbanReducer( 
    state: KanbanState, action: Action
): KanbanState{
        switch (action.type) {
            case "ADD_TASK":
                const task = action.payload;
                const column = state.columns[task.columnId];

                return {
                    ...state, tasks: {
                        ...state.tasks, 
                        [task.id]: task
                            },

                        columns: {
                            ...state.columns,
                            [task.columnId]: {
                                ...column,
                                taskIds: [...column.taskIds, task.id]
                            }
                        }
                    }

            case "MOVE_TASK": {

                const { taskId, newColumnId } = action.payload;
                const task = state.tasks[taskId];

                const oldColumn = state.columns[task.columnId];
                const newColumn = state.columns[newColumnId];

                return {
                    ...state, 
                    tasks: {
                        ...state.tasks,
                        [taskId]: {...task, columnId: newColumnId}
                    },
                    columns: {
                        ...state.columns,
                        [oldColumn.id]: {
                            ...oldColumn,
                            taskIds: oldColumn.taskIds.filter(id => id !== taskId)
                        },
                        [newColumnId]: {
                            ...newColumn,
                            taskIds: [...newColumn.taskIds, taskId]
                        }
                    }
                }
            }
                
                
        
            default:
                return state;
        }
}