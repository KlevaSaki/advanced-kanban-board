import { useContext } from "react";
import { KanbanContext } from "../context/KanbanProvider";

export function useKanban() {
    const context = useContext(KanbanContext);

    if(!context) throw new Error("useKanban must be used inside provider");

    return context;
}