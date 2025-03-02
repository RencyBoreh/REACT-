import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

function HandleCar(){
  const [Cars,setCars]=useState([]);
  const [carYear,setCarYear]=useState(new Date().getFullYear());
  const [carMake,setCarMake]=useState('');
  const [carModel,setCarModel]=useState('');
  const [carColor,setCarColor]=useState('');
function handleAddCar(){
  const newCar={
    year:carYear,
    make:carMake,
    model:carModel,
    color:carColor
  };

  setCars(c=>[...c,newCar]);
  setCarYear(new Date().getFullYear());
  setCarMake('');
  setCarModel('');
  setCarColor('');



}
function handleRemoveCar(index){
   setCars(c=>c.filter((_,i)=> i!== index));
}
function handleYearChange(event){
  setCarYear(event.target.value);
}
function handleMakeChange(event){
  setCarMake(event.target.value);
}
function handleColorChange(event){
  setCarColor(event.target.value);
}

function handleModelchange(event){
setCarModel(event.target.value);
}
  return(
    <div className="container bg-warning">
     <form onSubmit={(e) => e.preventDefault()}>
      <h1 className="text-center">List Of Car Objects</h1>
       <ul>
        {Cars.map((Car,index)=>
        <li key={index} onClick={()=>handleRemoveCar(index)}>
       {Car.year} {Car.color}  {Car.make} {Car.model}
        </li>
        )}
       </ul>
       <label htmlFor="" className="form-label">Car Year:</label>
       <input type="number" className="form-control" value={carYear} onChange={handleYearChange} /> <br />
       <label htmlFor="" className="form-label">Car Color:</label>
       <input type="text" className="form-control" value={carColor} onChange={handleColorChange}/> <br />
       <label htmlFor="" className="form-label">Car Make:</label>
       <input type="text" className="form-control" value={carMake} onChange={handleMakeChange}/> <br />
       <label htmlFor="" className="form-label">Car Model:</label>
       <input type="text" className="form-control" value={carModel} onChange={handleModelchange} /> <br />
       <button className="btn btn-primary my-4 px-5" onClick={handleAddCar}>Add Car</button>
      </form>
      
       
    </div>
  );
}
export default HandleCar