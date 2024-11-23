import NewTask from "./NewTask.jsx";
import { FaMinusCircle } from "react-icons/fa";


export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            {/* Header */}
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Tasks</h2>
            
            {/* New Task Form */}
            <NewTask onAdd={onAdd} />

            {/* No Tasks Message */}
            {tasks.length === 0 && (
                <p className="text-teal-800 my-4">
                    This project does not have any tasks yet.
                </p>
            )}

            {/* Tasks List */}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-teal-100 divide-y divide-teal-300">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex justify-between items-center py-3"
                        >
                            <span className="text-teal-800">{task.text}</span>
                            <button
                                className="text-teal-700 hover:text-red-500 text-2xl"
                                onClick={() => onDelete(task.id)}
                            >
                                <FaMinusCircle />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
