import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <task key={task.id} task={TASK} /> // Use JSX to render the Task component with the correct key
      ))}
    </div>
  );
}

export default TaskList;
