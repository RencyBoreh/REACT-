import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function States(){
 const [color,setColor] = useState('red');
 const [name,setName] = useState('Rency');
 const [age,setAge] = useState(0);
 const incrementAge=()=>{
  setAge(age + 1);
 }
const decrementAge=()=>{
  setAge(age-1);
}
const resetAge=()=>{
  setAge(0);
}
  

return(
  <div className="container  bg-info">
  <h1 className="text-center text-white">{age}</h1>
  <div className="container-fluid text-center">
    <button className="btn btn-primary me-5 px-5"onClick={decrementAge}>Decrement</button>
    <button className="btn btn-primary me-5 px-5"onClick={resetAge}>Reset</button>
    <button className="btn btn-primary px-5" onClick={incrementAge}>Increment</button>
  </div>
  </div>
// {/* <div>
//     <h2>The color now is {color}</h2>
//     <button onClick={()=>setColor('Blue')}>Blue</button>
//     <h5>My Name is {name}</h5>
//     <button onClick={()=>setName('Resly')}>Ressly</button>
//     <button onClick={()=>setName('Rabby')}>Rabby</button>
//     <button onClick={()=>setName("Ruffoh")}>Ruffoh</button>

//   </div> */}
  
 );


//  const [name,setName] = useState();
//  const updateName=()=>{
//    setName('Rency');
//  }
//  return (
//   <div>
//     <p>Name: {name}</p>
//     <button onClick={updateName}>Set Name</button>
//   </div>
//  );
}
export default States