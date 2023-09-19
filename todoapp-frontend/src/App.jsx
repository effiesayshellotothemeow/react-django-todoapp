import { useState } from "react";

//Components
import CustomForm from "./components/CustomForms";
import TaskList from "./components/TaskList";

function App() {
    // Create a variable to store tasks ;and a function to update it.
	const [tasks, setTasks] = useState([]);

    // Add task function
    const addTask = (task , deleteTask) => {
         // Update the list of tasks by adding the new task.
         // Get current list (prevState), and add the new task
        setTasks(prevState => [...prevState, task])
    }

    // Delete task
    const deleteTask = (id) => {
        setTasks(prevState => prevState.filter
            (t => t.id != id));
    }

    // Edit task

	return (
        <div className="container">
            <header>
                <h1>My Task List</h1>
            </header>
            {/* CustomForm has access to addTask */}
            <CustomForm addTask={addTask}/>

            {/* Only if there are tasks , then render the TaskList component." */}
            {tasks && (
            <TaskList 
                tasks={tasks}
                deleteTask={deleteTask}
            />
            )}
        </div>
	);
}

export default App;
