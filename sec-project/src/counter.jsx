import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

function Counter(){
 const [count,setCount]=useState(0);
const increment=()=>{
  setCount(count+1);
}
const decrement=()=>{
  setCount(count-1);
}
const reset =()=>{
  setCount(0);
}


 return(
  <div className="container bg-warning">
    <h1 className="text-center">{count}</h1>
    <div className="container text-center">
      <button className="btn btn-success me-5 px-5" onClick={decrement}>Decrement</button>
      <button className="btn btn-success me-5 px-5" onClick={reset}>Reset</button>
      <button className="btn btn-success px-5" onClick={increment}>Increment</button>
    </div>
  </div>
 );

}
export default Counter