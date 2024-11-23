import Tasks from "./Tasks.jsx";
import { FaTrashAlt } from "react-icons/fa";

export default function SelectedProject({
    project,
    onDelete,
    onAddTask,
    onDeleteTask,
}) {
    const { tasks, title, description, dueDate, id } = project;
    const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="flex items-start justify-center w-full h-full px-4">
            <div className="w-full max-w-xl mx-4 my-16 p-4 bg-white rounded-lg shadow-lg md:p-8">
                {/* <div className="w-[35rem] mt-16"> */}
                <header className="pb-4 mb-4 border-b-2 border-teal-300">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-teal-600 mb-2">
                            {title}
                        </h1>
                        <button
                            className="text-teal-600 hover:text-red-600 text-2xl"
                            onClick={() => onDelete(id)}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                    <p className="mb-4 text-teal-400">{formattedDate}</p>
                    <p className="text-teal-600 whitespace-pre-wrap">
                        {description}
                    </p>
                </header>
                <Tasks
                    onAdd={onAddTask}
                    onDelete={onDeleteTask}
                    tasks={tasks}
                />
            </div>
        </div>
    );
}
