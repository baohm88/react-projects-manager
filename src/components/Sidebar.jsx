import { useState } from "react";
import Button from "../components/UI/Button";
import { FaMinusCircle } from "react-icons/fa";

export default function Sidebar({
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId,
    onDelete,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    function handleDelete(projectId) {
        if (confirm("Are you sure you want to delete this project?")) {
            onDelete(projectId);
        }
    }

    return (
        <>
            {/* Hamburger button */}
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-teal-800 text-teal-50 p-2 rounded-md shadow-md"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className="block w-6 h-1 bg-teal-50 mb-1"></span>
                <span className="block w-6 h-1 bg-teal-50 mb-1"></span>
                <span className="block w-6 h-1 bg-teal-50"></span>
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-teal-800 text-teal-50 px-8 py-16 z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } md:static md:translate-x-0 md:w-72 rounded-r-xl`}
            >
                <h2 className="mb-8 font-bold uppercase md:text-xl text-teal-200">
                    Your Projects
                </h2>
                <div>
                    <Button onClick={onStartAddProject}>+ Add Project</Button>
                </div>
                <ul className="mt-8">
                    {projects.map((project) => {
                        let cssClasses =
                            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-teal-200 hover:bg-teal-800";

                        if (project.id === selectedProjectId) {
                            cssClasses += " bg-teal-800 text-teal-200";
                        } else {
                            cssClasses += " text-teal-400";
                        }

                        return (
                            <li
                                key={project.id}
                                className="flex justify-between items-center"
                            >
                                <button
                                    className={cssClasses}
                                    onClick={() => onSelectProject(project.id)}
                                >
                                    {project.title}
                                </button>
                                <button
                                    className="text-teal-400 hover:text-red-500"
                                    onClick={() => handleDelete(project.id)}
                                    aria-label={`Delete project ${project.title}`}
                                >
                                    <FaMinusCircle />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Overlay for small screens */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </>
    );
}
