import { useEffect, useState } from "react";

// Heroicon
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForms = ({ editedTask, updateTask, closeEditMode }) => {
	const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

	useEffect(() => {
		const closeModalIfEscaped = (e) => {
			e.key === "Escape" && closeEditMode();
		};
		window.addEventListener("keydown", closeModalIfEscaped);

		// Clean up
		return () => {
			window.removeEventListener("keydown", closeModalIfEscaped);
		};
	}, [closeEditMode]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		updateTask({ ...editedTask, name: updatedTaskName });
	};

	return (
		<div 
            role="dialog" 
            onClick={(e) => {
                e.target == e.currentTarget && closeEditMode()}}
        >
			<form className="todo" onSubmit={handleFormSubmit}>
				<div className="wrapper">
					<input
						className="input"
						id="editTask"
						type="text"
						placeholder="Update Task"
						value={updatedTaskName}
						maxLength={60}
						autoFocus
						required
						onInput={(e) => setUpdatedTaskName(e.target.value)}
					></input>
					<label className="label" htmlFor="editTask">
						Enter Task
					</label>
				</div>
				<button
					className="btn"
					type="submit" /*aria-label="Confirm Update Task"*/
				>
					<CheckIcon strokeWidth={2} height={24} width={24} />
				</button>
			</form>
		</div>
	);
};

export default EditForms;
