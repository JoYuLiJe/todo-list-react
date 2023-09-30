import Task from "./Task";



const TaskList = ({ tasks }) => {
    return(
        <div>
        <h2>Task List</h2>
        <p>{JSON.stringify(tasks)}</p>
        <Task tasks={tasks}/>
        <Task />
        <Task />
        <Task />
        </div>
    )
}

export default TaskList;