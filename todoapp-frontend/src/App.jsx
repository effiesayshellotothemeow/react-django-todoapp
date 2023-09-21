import { useState } from "react";

//Components
import CustomForms from "./components/CustomForms";
import EditForms from "./components/EditForms";
import TaskList from "./components/TaskList";

function App() {
	// Create a variable to store tasks ;and a function to update it.
	const [tasks, setTasks] = useState([]);
	const [editedTask, setEditedTask] = useState(null);
	// Check whether or not in editing mode
	const [isEditing, setIsEditing] = useState(false);

	// Add task function
	const addTask = (task) => {
		// Update the list of tasks by adding the new task.
		// Get current list (prevState), and add the new task
		setTasks((prevState) => [...prevState, task]);
	};

	// Delete task
	const deleteTask = (id) => {
		setTasks(prevState => prevState.filter(t => t.id !== id));
	};

	// Check task
	const toggleTask = (id) => {
		setTasks(
			prevState.map((t) => (t.id == id ? { ...t, checked: !t.checked } : t))
		);
	};

	// Update task
	const updateTask = (task) => {
		setTasks(
			prevState.map((t) => (t.id == task.id ? { ...t, name: task.name } : t))
		);
		// Collapse the edit mode
	};

	// Enter edit mode
	const enterEditMode = (task) => {
		setEditedTask(task);
		// Expand editing mode
		setIsEditing(true);
	};

	return (
		<div className="container">
			<header>
				<h1>My Task List</h1>
			</header>

			{/* Check whether or not in editing mode */}
			{isEditing && (
				<EditForms editedTask={editedTask} updateTask={updateTask} />
			)}

			{/* CustomForm has access to addTask */}
			<CustomForms addTask={addTask} />

			{/* Only if there are tasks , then render the TaskList component." */}
			{tasks.length > 0 && (
				<TaskList
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTask={toggleTask}
					enterEditMode={enterEditMode}
				/>
			)};
		</div>
	);
}

export default App;
