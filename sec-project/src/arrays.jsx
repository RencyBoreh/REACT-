import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
// import List from './list';
function ArrayManipulation(){
 const [foods,setFoods] = useState(['apple','banana','orange']);
 
 function handleAddfood(){
   const newFood=document.getElementById('foodinput').value ;
   document.getElementById('foodinput').value ='';
   setFoods(foods => [...foods,newFood]);

 }
function handleremovefood(index){
// event.preventDefault();
setFoods(foods.filter((_,i) => i !== index));
}
return(
   <div className="container p-5 bg-light">
    <form onSubmit={(e) => e.preventDefault()}>
   
    <h2 className="text-center">List of Foods:</h2>
      <ul>
        {foods.map((food,index)=>
           <li key={index} onClick={()=>handleremovefood(index)}>
            {food}
           </li>)}
      </ul>
       <input type="text" id='foodinput' placeholder='enter food name' className="form-control my-3" />
      <button className="btn btn-success me-3 px-5" onClick={handleAddfood}>Add Food</button>
      <button className="btn btn-danger px-5" onClick={handleremovefood}>Remove Food</button>

    </form>
     
   </div>
);
}
export default ArrayManipulation;