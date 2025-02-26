import 'bootstrap/dist/css/bootstrap.min.css';

function  Button(){
  let count=0;
  const handleClick= function (name){
    if (count<3){
      count+=1;
      alert(`Hey ${name} you clicked me`);
    }
    else{
      alert(`Hey ${name} stop clicking me`);
    }
    
  }
 return(
  <>
 
  <h1>Welcome To My Home  Page</h1>
  <button className="btn btn-warning btn-lg" onClick={()=>handleClick("Resly")}>Click Me!</button>
  </>


 );
}
export default Button
