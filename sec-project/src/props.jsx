import 'bootstrap/dist/css/bootstrap.min.css';
function Student(props){
return(
  <div>
    <p>Name:{props.name}</p>
    <p>Age:{props.age}</p>
    <p>Isstudent:{props.isStudent ? "Yes" : "No"}</p>
  </div>
);
}
export default Student