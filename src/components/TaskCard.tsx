import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useMemo } from "react";
import { useKanban } from "../hooks/useKanban";

export default function TaskCard({id}: {id: string}) {

    const { state } = useKanban();
    const task = state.tasks[id];

    console.log("Priority:" ,task.priority)

    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform} = useDraggable({ id });

    

    const priorityColor = useMemo(() => {

        switch (task.priority) {
            case "high":
                return "#ef4444"

            case "medium":
                return "#eab308"

            default:
                return "#22c55e"
                
        }
    }, [task.priority])

    const style = {
        transform: CSS.Translate.toString(transform),
        padding: 10,
        border: "1px solid black",
        marginBottom: 10,
        background: "white",
        borderLeft: `5px solid ${priorityColor}`,
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }

    return (
        <div style={style} ref={setNodeRef} {...listeners} {...attributes}
        >
            <h4 className="font-semibold text-gray-800">{task.title}</h4>
            <p className="text-sm text-gray-600">{task.description}</p>
        </div>
    )
}