import { useRef } from "react";
import Input from "../components/UI/Input";
import Modal from "../components/UI/Modal";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-teal-700 my-4">
                    Invalid Input
                </h2>
                <p className="text-teal-600 mb-4">
                    Oops ... looks like you forgot to enter a value.
                </p>
                <p className="text-teal-600 mb-4">
                    Please make sure you provide a valid value for every input
                    field.
                </p>
            </Modal>

            {/* Responsive Container */}
            <div className="flex items-start justify-center w-full h-full px-4">
                <div className="w-full max-w-xl mx-4 my-16 p-4 bg-white rounded-lg shadow-lg md:p-8">
                    {/* Buttons */}
                    <menu className="flex items-center justify-end gap-4 mb-6">
                        <button
                            className="text-teal-800 hover:text-teal-950"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-6 py-2 rounded-md bg-teal-800 text-teal-50 hover:bg-teal-950"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </menu>

                    {/* Input Fields */}
                    <div className="space-y-4">
                        <Input type="text" ref={title} label="Title" />
                        <Input ref={description} label="Description" textarea />
                        <Input type="date" ref={dueDate} label="Due Date" />
                    </div>
                </div>
            </div>
        </>
    );
}
