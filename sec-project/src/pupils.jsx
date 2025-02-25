import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from 'prop-types';
function Pupils (props){
  return(
    <>
    <div className="container bg-light p-3 shadow">
    <p>Name:{props.name}</p>
     <p>Age: {props.age}</p>
     <p>School:{props.school}</p>
     <p>Course:{props.course}</p>
    </div>
     
    </>
   
  );
}
Pupils.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
  school:PropTypes.string,
  course:propTypes.string,
}
export default Pupils