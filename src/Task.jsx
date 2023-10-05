// Task accepts an individual task and the deleteTask
// function as props
const Task = ({ task, deleteTask }) => {
    return(
        <div>
            {/* renduring the text from the task in an h3 
            along with a button whose onClick function will
            be the deleteTask function*/}
            <h3>
                {task.text} <button onClick={() => deleteTask(task.id)}>Delete</button>
            </h3>
        </div>
    )
}

export default Task;