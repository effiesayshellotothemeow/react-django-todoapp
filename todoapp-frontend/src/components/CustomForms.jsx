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
            <button
                className="btn"
                type="submit"
                //aria-label="Add Task"
                >
            </button>
        </div>
    </form>
  )
}

export default CustomForms