import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useKanban } from "../hooks/useKanban";
import Column from "./Column";
import { useCallback, useRef } from "react";


export default function Board() {
    const { state, dispatch } = useKanban();
    const board = state.boards['board1'];
    const boardRef = useRef<HTMLDivElement>(null)

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if(!over ) return

        const taskId = active.id as string
        const newColumnId = over.id as string;

         dispatch({
            type: "MOVE_TASK",
            payload: {
                taskId,
                newColumnId
            }
         })
    }, [dispatch])

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className='flex justify-center m-2 items-center text-2xl text-gray-700 font-semibold'>Advanced Kanban Board with Drag and Drop</div>
            <div className="max-w-4xl m-auto bg-red-700">
                <div ref={boardRef} className="flex gap-6 p-6 h-screen overflow-x-auto bg-gray-100 md:gap-8 w-full">
                
                { board.columnIds.map(colId => (
                    <Column key={colId} columnId={colId} />
                ))}
            </div>
            </div>
        </DndContext>
    )
}