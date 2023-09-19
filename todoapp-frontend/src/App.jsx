import { useState } from "react";

//components
import CustomForm from "./components/CustomForms";

function App() {
	const [count, setCount] = useState(0);

	return (
        <div className="container">
            <header>
                <h1>My Task List</h1>
            </header>
            <CustomForm/>
        </div>
	);
}

export default App;
