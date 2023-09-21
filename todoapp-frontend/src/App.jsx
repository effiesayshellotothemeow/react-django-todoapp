import { useState } from "react";

//Components
import CustomForm from "./components/CustomForms";
import EditForms from "./components/EditForms";
import TaskList from "./components/TaskList";

function App() {
    // Create a variable to store tasks ;and a function to update it.
	const [tasks, setTasks] = useState([]);
    const [editedTask, setEditedTask] = useState(null);

    // Add task function
    const addTask = (task , deleteTask) => {
        // Update the list of tasks by adding the new task.
        // Get current list (prevState), and add the new task
        setTasks(prevState => [...prevState, task])
    }

    // Delete task
    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter(
            t => t.id != id));
    }

    // Check task
    const toggleTask = (id) => {
        setTasks(prevState.map(t => (
            t.id == id ? { ...t, checked: !t.checked} : t
        )))
    }

    // Update task
    const updateTask = (task) => {
        setTasks(prevState.map(t => (
            t.id == task.id ? { ...t, name: task.name } : t
        )))
        // Collapse the edit mode
    }

    // Enter edit mode
    const enterEditMode = (task) => {
        setEditedTask(task);
    }

	return (
        <div className="container">
            <header>
                <h1>My Task List</h1>
            </header>

            <EditForms
                editedTask={editedTask}
                updateTask={updateTask}
            />            

            {/* CustomForm has access to addTask */}
            <CustomForm addTask={addTask}/>

            {/* Only if there are tasks , then render the TaskList component." */}
            {tasks && (
            <TaskList 
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
            />
            )}
        </div>
	);
}

export default App;
