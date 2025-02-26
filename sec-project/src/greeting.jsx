// import PropTypes from 'prop-types';
function Greet(props){


  return(
    props.isStudent ? <h2>Hello {props.name} you are a student</h2> :<h2>Hello {props.name} you are not a student</h2>
  );
  // if(props.isStudent){
  //   return(
  //     <>
  //     <h1>Hello {props.name}</h1>
  //     <h1>Yu are a Student</h1>
  //     </>
  //   );
      
  // }
  // else{
  //   return(
  //     <>
  //       <h1>Hello {props.name}</h1>
  //       <h1>You are not a Student</h1>

  //     </>
  //   );
  // }

}
// Greet.proptypes={
//   isStudent:PropTypes.bool,
//   name:PropTypes.string
// }
export default Greet