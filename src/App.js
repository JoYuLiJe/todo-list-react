import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useState, useEffect } from 'react';

function App() {
  // const [data, setData] = useState(INITIAL VALUE)
  // the structure of the state is an array of objects each with
  // id and test properties
  // const [tasks, setTasks] = useState([
  //   { id: 1, text: "Learn React"}
  // ])

  // once app architecture/design is good to go, no longer need
  // an initial default task
  // if anything in localStorage for 'tasks', set the tasks state to be that initially
  // if not,
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  // create a state variable to keep track of welcome message
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to the To Do List Tracker!");


  // write functions that will 'do some stuff' and then use setTasks
  // to update the state

  // take in a task object, create a random id for the task,
  // create a new task object with teh new id and the task.s text
  // and update the tasks array using setTasks

  // even though addNewTask will be called in the AddTask component,
  // it wil be working with/changing the state, so it makes sense to
  // define in the App component, where the state was orginiated
  const addNewTask = (task) => {
    // task -> {text: "example text"}
    // generate a random id that is an ineger from 1 to 10000
    const id = Math.floor(Math.random() * 10000) + 1;
    
    // newTask has a property called id with a value equal to the random id generated above
    // along with all of the properties from the task parameter passed in
    const newTask = { id, ...task } //newTask -> { id: 999, text: "example text" }

    // update the tasks array with newTAsk using setTasks
    //sets tasks to be a new array with all of the original tasks plus the new task
    setTasks([...tasks, newTask]);

    // console.log(id);
    console.log(tasks);

  }





// accepts a parameter called id which is the id of the task we
  const deleteTask = (id) => {
// filter method: checks every item in an array again
// given condition and returns a new array wtih all items
// for which that condition is true

// use fitler to filter out the task that matches the id
// ie, use filter to return a new array that only contains tasks that don't match id
// keep each task in tasks if its id does NOT match the id we want to delete 
let updatedTasks = tasks.filter( (task) => task.id !== id );

// set tasks to be the new updated, filter tasks with the id removed
setTasks(updatedTasks);
// Long way without filter
// let updatedTasks = [];
// for(let i = 0; i < tasks.length; i++) {
//   let currentTask = tasks[i]
//   if (currentTask.id !== id) {
//     updatedTasks.push(currentTask);
  
//   }
// }
}

const editTask = (id, newText) => {
// use map method to go through tasks array and check if each tasks id matches the id
// of the task we want to edit. if the is's match, update the text of the task with the
// new text. if the id's don't match, the task should remain unchanged  
let updatedTasks = tasks.map( (task) => (task.id === id) ? {...task, text: newText} : task );
setTasks(updatedTasks);
}

// Create an effect with useEffect that will allow us to temporarily 
// display a welcome message

useEffect(() => {
  // Side effect logic here
  console.log("welcomeMessage is:", welcomeMessage);

  const timer = setTimeout(() => {
    setWelcomeMessage("");
  }, 5000); //wait 5 seconds before running the effect fuction

  // Optional cleanup logic 
  return () => {
    // good practice to clearout timer when no longer needed
      clearTimeout(timer);
  };

  // only want this effect to run once: when the App compoent renders for the first time
  // so we leave the dependacncy array empty
}, []);


// check to see if tasks has changed appropriately
// mimics the functionality of console.log as we're used to using it
useEffect(() => {
  console.log("tasks is:", tasks);
}, [tasks]);

useEffect(() => {
  console.log("welcomeMessage is:", welcomeMessage);
}, [welcomeMessage]);

// useEffects for localStorage, one for reading the data from localStorage
// and one for saving data to localStorage

// // reading data from localStorage on initial load
// replaced by updating the useState function above so that it checks for localStorage itself
// useEffect(() => {
//   // parse JSON from localStrorage and store in storedTasks variable
//   const storedTasks = JSON.parse(localStorage.getItem('tasks'));
//   // if there were any tasks in local storage, setTasks to be storedTasks
//   // if storedTasks exists and is not empty
//   if (storedTasks) {
//     // settasks state variable to be the storedTasks
//     setTasks(storedTasks);
//   }
// }, []);

// saving data to localStorage whenever tasks updates
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);


  return (
    // container provides a fixed-wdith container
    // has a max-width that changes at different 'breakpoints'
    // automatically applies horizontal padding so content reamins centered and has
    // consistent spacing around edges of the screen



    // bootstrap spacing ranges from 0 to 5 (or auto)
    // mt, mb, mr, ml, mx, my ... pt, pb, pr, pl, px, py
    <div className="container mt-5">
      <h1 className="text-center mb-4">My React To Do List</h1>
      {/* 'short circuiting' */}
      {/* first checks if welcomeMessage exists if so it renders the message */}
      {welcomeMessage && <p>{welcomeMessage}</p>}
      {/* passes down the tasks state variable above as a prop called 'tasks' to the child*/}
      {/* <MyComponent propName={originalName} */}
      <AddTask addNewTask={addNewTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;


