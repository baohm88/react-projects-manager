import noProjectImage from "../assets/no-projects.png";
import Button from "../components/UI/Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <>
            <div className="flex items-start justify-center w-full h-full px-4">
                <div className="w-full max-w-xl mx-4 my-16 p-4 bg-white rounded-lg shadow-lg md:p-8">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        {/* Image */}
                        <img
                            src={noProjectImage}
                            alt="An empty task list"
                            className="w-24 h-24 object-contain mb-6"
                        />

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">
                            No Project Selected
                        </h2>

                        {/* Description */}
                        <p className="text-teal-500 text-sm md:text-base mb-6 text-center">
                            Select an existing project or get started by
                            creating a new one.
                        </p>

                        {/* Button */}
                        <Button onClick={onStartAddProject}>
                            Create New Project
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
