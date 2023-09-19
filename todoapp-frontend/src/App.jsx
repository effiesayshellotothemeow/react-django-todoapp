import { useState } from "react";

//components
import CustomForm from "./components/CustomForms";

function App() {
	const [count, setCount] = useState(0);

    // Add
    const addTask = (task) => {
        console.log(task)
    }

	return (
        <div className="container">
            <header>
                <h1>My Task List</h1>
            </header>
            {/* CustomForm has access to addTask */}
            <CustomForm addTask={addTask}/>
        </div>
	);
}

export default App;
