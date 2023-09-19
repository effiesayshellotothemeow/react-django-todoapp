import { BeakerIcon } from "@heroicons/react/24/solid";

const CustomForms = () => {

    const handleFormSubmit = (e) => {
        // Prevent default form submission (aka reloading)
        e.preventDefault();
        // Log event for future debugging
        console.log(e);
    }

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
           <input
                className="input" 
                id="task"
                type="text"
                placeholder="Enter Task"
                //value={task}
                maxLength={60}
                autoFocus
                required
                onInput={(e) => setTask(e.target.value)}
                >
                </input>
           <label
                className="label"
                htmlFor="task"
                >
            </label>
            </div>
            <button
                className="btn"
                type="submit"
                //aria-label="Add Task"
                >
                <BeakerIcon className="h-6 w-6 text-blue-500"/>
            </button>
    </form>
  )
}

export default CustomForms