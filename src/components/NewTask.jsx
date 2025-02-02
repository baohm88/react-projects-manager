import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-teal-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className="text-teal-700 hover:text-teal-950 text-2xl"
                onClick={handleClick}
            >
                <FaPlusCircle />
            </button>
        </div>
    );
}
