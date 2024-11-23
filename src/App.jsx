import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    function handleAddTask(text) {
        setProjectsState((prevState) => {
            const updatedProjects = prevState.projects.map((project) => {
                if (project.id === prevState.selectedProjectId) {
                    return {
                        ...project,
                        tasks: [
                            { id: uuidv4(), text },
                            ...(project.tasks || []), // Ensure tasks array exists
                        ],
                    };
                }
                return project;
            });
            return { ...prevState, projects: updatedProjects };
        });
    }

    function handleDeleteTask(taskId) {
        setProjectsState((prevState) => {
            const updatedProjects = prevState.projects.map((project) => {
                if (project.id === prevState.selectedProjectId) {
                    return {
                        ...project,
                        tasks: project.tasks.filter(
                            (task) => task.id !== taskId
                        ),
                    };
                }
                return project;
            });
            return { ...prevState, projects: updatedProjects };
        });
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: id,
        }));
    }

    function handleStartAddProject() {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: null,
        }));
    }

    function handleCancelAddProject() {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: undefined,
        }));
    }

    function handleAddProject(projectData) {
        const newProject = { ...projectData, id: uuidv4(), tasks: [] };
        setProjectsState((prevState) => ({
            ...prevState,
            projects: [...prevState.projects, newProject],
            selectedProjectId: undefined,
        }));
    }

    function handleDeleteProject(projectId) {
        setProjectsState((prevState) => ({
            ...prevState,
            projects: prevState.projects.filter(
                (project) => project.id !== projectId
            ),
            selectedProjectId:
                prevState.selectedProjectId === projectId
                    ? undefined
                    : prevState.selectedProjectId,
        }));
    }

    const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
    );

    let content;
    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelAddProject}
            />
        );
    } else if (!selectedProject) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    } else {
        content = (
            <SelectedProject
                project={selectedProject}
                onDelete={handleDeleteProject}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
            />
        );
    }

    return (
        <main className="h-screen flex gap-8">
            <Sidebar
                projects={projectsState.projects}
                selectedProjectId={projectsState.selectedProjectId}
                onStartAddProject={handleStartAddProject}
                onSelectProject={handleSelectProject}
                onDelete={handleDeleteProject}
            />
            {content}
        </main>
    );
}

export default App;
