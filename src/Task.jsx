import { useState } from "react";


// Task accepts an individual task and the deleteTask
// function as props
const Task = ({ task, deleteTask, editTask }) => {
    // create state to keep track of whether or not in editing mode
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);


    // because our edit button now needs to have more "complex" functionality, ie its 
    // functionality changes based on whether or not we're currently editing the task,
    // it's helpful o make a separate event handler function to handle that complexity
    const handleEditClick = () => {
        // if currently in editing mode, then when I click the eidt button, I want to submit
        // the new task by calling the editTask function
        if (isEditing) {
            editTask(task.id, newText)
        } 

        // redardless of what mode I am in, clickgin the edit button should switch that mode (editig vs not editing)
        setIsEditing(!isEditing);


    }

    return(
        // list-group-item styles list item in a way such that they are visually distinct from each other and also provides some padding
        // d-flex establishes a container/element as a flexbox(allows direct children to be laid out in a row)
        // justify-content-between -> maximizes available space between children
        // align-items-center vertically aligns children in the middle
        <li className="List-group-item d-flex justify-content-between align-items-center">
        {/* renduring the text from the task in an h3 
            along with a button whose onClick function will
            be the deleteTask function*/}
            
        {/* ternary operator: if isEditing is true, display the editing input field but if it's false, display the text of the task*/}
        {isEditing 
            ? <input type="text" placeholder="Enter a new task" value={newText} onChange={(e) => setNewText(e.target.value)}/>
            : task.text
        } 
        {/* if in editing mode button should say 'Confirm', and if not button should say 'Edit' */}

        {/* buttons in div together so they are treated as single element fordisplay flex purposes*/}
         <div>
            <button className="btn btn-outline-info" onClick={() => handleEditClick()}>{isEditing ? "Confirm" : "Edit"}</button>
            <button className="btn btn-outline-danger" onClick={() => deleteTask(task.id)}>Delete</button>
         </div>
            
        </li>
    )
}

export default Task;