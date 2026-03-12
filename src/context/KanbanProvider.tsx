import { createContext, useReducer, type PropsWithChildren } from "react"
import type { KanbanState } from "../types/kanbanTypes"
import { kanbanReducer } from "../reducers/KanbanReducer"


type ContextType = {
    state: KanbanState
    dispatch: React.Dispatch<any>
}

export const KanbanContext = createContext<ContextType | null>(null);

const initialState: KanbanState = {
    boards: {
        board1: {id: "board1", title: "Project", columnIds: ["todo", "doing", "done"]}
    },
    columns: {
        todo: {id: "todo", title: "Todo", taskIds: []},
        doing: {id: "doing", title: "In Progress", taskIds: []},
        done: {id: "done", title: "Done", taskIds: []}
    },
    tasks: {}
}

export function KanbanProvider({children} : PropsWithChildren) {
    const [ state, dispatch ] = useReducer(kanbanReducer, initialState);

    return (
        <KanbanContext.Provider value={{ state, dispatch }}>
            {children}
        </KanbanContext.Provider>
    )
}