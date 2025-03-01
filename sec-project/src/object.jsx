import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';

function ObjectUpdater(){
  const [car,setCar]=useState({name:'Ford',year:2002,color:'red'});
 
  function handlename(event){
     setCar(c=>({...c,name:event.target.value}));
  }
  function handleyear(event){
    setCar(c=>({...c,year:event.target.value}))
  }
  function handlecolor(event){
    setCar(c=>({...c,color:event.target.value}));
  }
  return(
    <div className="container bg-primary">
      <p>You Like:{car.color} {car.name} made in {car.year} </p>
      <input type="text" value={car.name} onChange={handlename}/> <br /> <br />
      <input type="number" value={car.year} onChange={handleyear} /> <br /><br />
      <input type="text" value={car.color} onChange={handlecolor} /> 
    </div>
  );
}
export default ObjectUpdater