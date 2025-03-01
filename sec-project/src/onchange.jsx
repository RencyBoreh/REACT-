import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function OnChange(){
 const [name,setName]=useState('Your Name...');
 const [age,setAge]=useState(0);
 const [comment,setComment]=useState('');
 const [payment,setPayment]=useState('');
 function handlePayment(event){
  setPayment(event.target.value);
 }
 function handlecomment(event){
  setComment(event.target.value);
 }
 function handlechange(event){
  setName(event.target.value);
 }
 function handleage(event){
  setAge(event.target.value);
 }
 return(
  <div className="container bg-light shadow">
    <h3 className="text-center">This is a Form</h3>
    <form action="">
       <input type="text" className="form-control" onChange={handlechange} id='fullname' value={name} />
       <p>Name:{name}</p>
       <input type="number" className="form-control" onChange={handleage} id='age' value={age} />
       <p>Your Age is {age} years.</p>
       <textarea name="" value={comment} onChange={handlecomment} id="" className="form-control"></textarea>
       <p>Comment:{comment}</p>
      <select name="" id="" className="form-select my-4" value={payment} onChange={handlePayment}>
      <option value="">Select Payment option</option>
      <option value="Visa">Visa</option>
      <option value="Master Card">Master Card</option>
      <option value="Gift Card">Gift Card</option>
      </select>
      <p>Payment Method: {payment}</p>
    </form>
  </div>
 );  
}
export default OnChange