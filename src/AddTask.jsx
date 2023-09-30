import { useState } from "react";


// WITH Destructuring
const AddTask = ({ addNewTask }) => { //pass the addNewTask function as a prop
    const [text, setText] = useState('');

    // create a function to run when the form is submitted
    // the function will call the addNewTask function and 
    // clear out the input box

    // sumbit event creates an 'event object that we will call e
    // this allows us to manipulate the event, often to prevent
    // the default event behavior
    const onSubmit = (e) => {
        e.preventDefault();
        // creates an object with a jey anmed text whose value is the test state
        addNewTask( { text } ); //same thing as addNewTask({text : "Learn React"})
        // reset the text ub tge input field
        setText('');
    }

    return(
        <div>
            <h2>Add Task</h2>

            {/* call the onSubmit function when form is submitted */}
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Save Task</button>
            </form>
            {/* <p>{JSON.stringify(tasks)}</p>Stringified version of props.tasks */}
            {/* <p>{example}</p> */}
        </div>
    )
}

export default AddTask;


// function addNums() {
//  console.log(a + b);
// }

// addNums(2, 4);

// WITHOUT Destructuring props
// const AddTask = (props) => {
//     // props -> {tasks: tasks, example: 5}
//     return(
//         <>
//             <h2>Add Task</h2>

//             <p>{JSON.stringify(props.tasks)}</p>{/*Stringified version of props.tasks*/}
//             <p>{props.example}</p>
//         </>
//     )
// }