
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
  // const [data, setData] = useState(INITIAL VALUE)
  // the structure of the state is an array of objects each with
  // id and test properties
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React"}
  ])

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

  return (
    <div className="App">
      <h1>My React To Do List</h1>
      {/* passes down the tasks state variable above as a prop called 'tasks' to the child*/}
      {/* <MyComponent propName={originalName} */}
      <AddTask addNewTask={addNewTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
