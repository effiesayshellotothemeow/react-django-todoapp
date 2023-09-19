import React from "react";
// Component
import TaskItem from "./TaskItem";
// Styles
import styles from "./TaskList.Module.css";

// Create a list of tasks based on the data provided in the tasks prop
const TaskList = ({ tasks }) => {
	return (
		// Render and loop
		<ul className={styles.tasks}>
			{/* sort by id (timestamp) */}
			{tasks
				.sort((a, b) => b.id - a.id)
				.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
		</ul>
	);
};

export default TaskList;
