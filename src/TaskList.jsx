import Task from "./Task";



const TaskList = ({ tasks, deleteTask, editTask }) => {
    return(
        <div>
        <h2>Task List</h2>

        {/*{id: __ , task: __} */}

        {/*Use the map method to take each task in the tasks array and render it in a Task component.
        We pass down the task id, the task itself, and the deleteTask function */}
          {tasks.map((task) => (
            <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask}
            editTask={editTask}/>
        ))}
        </div>
    )
}

export default TaskList;