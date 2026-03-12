import { useKanban } from "../hooks/useKanban";
import TaskCard from "./Taskcard";
import TaskForm from "./TaskForm";

export default function Column({ columnId }: { columnId: string}){
    const { state } = useKanban();

    const column = state.columns[columnId]

    return (
        <div>
            <h3>{column.title}</h3>

            { column.taskIds.map(id => (
                <TaskCard key={id} id={id}/>
            ))}

            <TaskForm columnId={columnId}/>
        </div>
    )
}