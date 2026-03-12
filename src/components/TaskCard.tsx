import { useMemo } from "react";
import { useKanban } from "../hooks/useKanban";

export default function TaskCard({id}: {id: string}) {

    const { state } = useKanban();
    const task = state.tasks[id];

    const priorityColor = useMemo(() => {

        switch (task.priority) {
            case "High":
                return "red"

            case "Medium":
                return "orange"

            default:
                return "gray"
                
        }
    }, [task.priority])

    return (
        <div style={{borderLeft: `5px solid ${priorityColor}`}}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
        </div>
    )
}