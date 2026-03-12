import { useForm } from "react-hook-form";
import { useKanban } from "../hooks/useKanban";
import { v4 as uuid } from "uuid";

export default function TaskForm({columnId}: { columnId: string }){

    const { dispatch } = useKanban();

    const { register, handleSubmit, reset } = useForm();

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("title", {required: true})}
            placeholder="Task title" />

            <textarea {...register("description")}
            placeholder="Description"/>

            <select {...register("priority")}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button>Add</button>
        </form>
    )
}