import { useState } from "react";

// Heroicon
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForms = ({ addTask }) => {
	// Hooks
	const [task, setTask] = useState("");

	const handleFormSubmit = (e) => {
		// Prevent default form submission (aka reloading)
		e.preventDefault();

        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        // Clear input field after submit
        setTask("");
	};

	return (
		<form className="todo" onSubmit={handleFormSubmit}>
			<div className="wrapper">
				<input
					className="input"
					id="task"
					type="text"
					placeholder="Enter Task"
					value={task}
					maxLength={60}
					autoFocus
					required
					onInput={(e) => setTask(e.target.value)}
				>
                </input>
				<label className="label" htmlFor="task">
                    Enter Task
                </label>
			</div>
			<button className="btn" type="submit" /*aria-label="Add Task"*/>
				<PlusIcon />
			</button>
		</form>
	);
};

export default CustomForms
