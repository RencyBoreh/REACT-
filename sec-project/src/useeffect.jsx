import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react';

function Useeffect(){
const [count,setcount]=useState(0);

useEffect(()=>{
  document.title= `Count:${count}`;
})
function add(){
  setcount(c=> c+1)
}
function subtract(){
  setcount(c=>c-1)
}

return(
  <div className="container my-5 p-5 shadow">
   <p>Count: {count}</p>
   <button className="btn btn-primary px-5 me-3" onClick={add}>Add</button>
   <button className="btn btn-danger px-5" onClick={subtract}>Subtract</button>
  </div>
);
}
export default Useeffect