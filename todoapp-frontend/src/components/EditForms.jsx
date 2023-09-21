import { useState } from "react";

// Heroicon
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForms = ({ editedTask, updateTask }) => {
	const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div  role="dialog" onClick={""}>
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
				<button className="btn" type="submit" /*aria-label="Confirm Update Task"*/>
					<CheckIcon strokeWidth={2} height={24} width={24} />
				</button>
			</form>
		</div>
	);
};

export default EditForms;
