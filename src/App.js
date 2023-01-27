import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import ToDo from './components/ToDo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  // Tasks (ToDo List) State
const [toDo, setToDo] = useState([]);

  // Temp State
const [newTask, setNewTask] = useState('');


  // Add task 
const addTask = () => {
    if(newTask) {
    let num = toDo.length + 1; 
    let newEntry = { id: num, title: newTask, status: false }
    setToDo([...toDo, newEntry])
    setNewTask('');
    }
}

  // Delete task 
const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
}

  // Mark task as done or completed
const markDone = (id) => {
    let newTask = toDo.map( task => {
    if( task.id === id ) {
        return ({ ...task, status: !task.status })
    }
    return task;
    })
    setToDo(newTask);
}

return (  
  <div className="header">
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz66Fqv4ESh9O6cptixPXDhejGAbA9Qso36Q&usqp=CAU"} alt="" height="50px" width="100px"/>
    <div className="container App text-center text-2xl font-semibold ">
    <br /><br />
    <h2 className="text-red-700	color: rgb(185 28 28) font-bold font-weight: 700 text-3xl font-size: 1.875rem">To Do List App</h2>
    <br /><br />
    <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
    />

    {/* Display ToDos */}
    {toDo && toDo.length ? '' : 'No Tasks...'}
    <ToDo
    toDo={toDo}
    markDone={markDone}
    deleteTask={deleteTask}
    />
  </div>
</div>
  
);
}
export default App;
