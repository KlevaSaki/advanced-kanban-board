import { useDroppable } from "@dnd-kit/core";
import { useKanban } from "../hooks/useKanban";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

export default function Column({ columnId }: { columnId: string}){
    const { state } = useKanban();

    const column = state.columns[columnId]

    const { setNodeRef, isOver } = useDroppable({
        id: columnId
    })

    return (
        <div ref={setNodeRef} className={`flex flex-col w-72 md:w-80 h-fit bg-gray-200 rounded-xl p-4 shadow-sm ${isOver ? "bg-blue-100" : "bg-gray-200"}`}>
            <h3 className="text-lg font-semibold mb-3">{column.title}</h3>

            <div className="flex flex-col gap-3">
                { column.taskIds.map(id => (
                    <TaskCard key={id} id={id}/>
                ))}
            </div>

            <TaskForm columnId={columnId}/>
        </div>
    )
}