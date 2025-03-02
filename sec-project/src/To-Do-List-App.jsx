import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

function ToDoList(){
  const [Tasks,setTasks]=useState(['Eat Food','Read Book','Sleep']);
  const [newTask,setNewTask]=useState('');

  function addTask(){
    if (newTask.trim() !== "") {
      setTasks(t=>[...t,newTask])
     setNewTask("");
    }  
  }
  function removeTask(index){
    const updatedTask=Tasks.filter((_,i)=> i!== index);
    setTasks(updatedTask)
  }
  function handleinputChange(event){
  setNewTask(event.target.value);
  }

  return(
    <div className="container px-5 shadow bg-light">
      <h1 className="text-center">To Do List App</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="row">
          <div className="col-lg-7 col-sm-7 col-md-7"><input type="text" placeholder='Enter a task..' value={newTask}  className="form-control" onChange={handleinputChange}/></div>
          <div className="col-lg-5 col-sm-5 col-md-5"><button className="btn px-5 btn-primary" onClick={addTask}>Add</button></div>
        </div>
        <ol>
           {Tasks.map((task,index)=>
          <li class key={index}>
            <div className="row my-2">
              <span className="col">{task}</span>
              <span className="col"><button className="btn btn-danger px-5" onClick={()=>removeTask(index)}>Delete</button></span>
            </div>
            
          </li>
          )}
        </ol>
      </form>
    </div>
  );
}
export default ToDoList