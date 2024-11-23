import { forwardRef } from "react";


const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const classes =
        "w-full p-1 border-b-2 rounded-sm border-teal-300 bg-teal-100 text-teal-900 focus:outline-none focus:border-teal-600";

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-teal-500">
                {label}
            </label>
            {textarea ? (
                <textarea ref={ref} className={classes} {...props} />
            ) : (
                <input ref={ref} className={classes} {...props} />
            )}
        </p>
    );
});

export default Input;
