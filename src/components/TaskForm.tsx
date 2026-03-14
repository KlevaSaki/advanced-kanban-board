import { useForm } from "react-hook-form";
import { useKanban } from "../hooks/useKanban";
import { v4 as uuid } from "uuid";
import { useEffect, useRef } from "react";

export default function TaskForm({columnId}: { columnId: string }){

    const { dispatch } = useKanban();

    const { register, handleSubmit, reset } = useForm();

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    })

    const onSubmit = ( data: any) => {

        dispatch({
            type: "ADD_TASK",
            payload: {
                id: uuid(),
                columnId,
                ...data
            }
        })

        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-4">
            <input  type="text" {...register("title", {required: true})}
            placeholder="Task title" 
            className="border rounded-md px-2 py-1 text-sm"/>

            <textarea {...register("description")}
            placeholder="Description"
            className="border rounded-md px-2 py-1 text-sm"/>

            <select {...register("priority")} className="border rounded-md px-2 py-1 text-sm">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type="submit" className="bg-indigo-600 text-white rounded-md py-1 text-sm hover:bg-indigo-700 transition">Add</button>
        </form>
    )
}