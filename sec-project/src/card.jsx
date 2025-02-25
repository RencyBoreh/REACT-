 import ProfilePic from './assets/valentine2-removebg-preview.png'
 import 'bootstrap/dist/css/bootstrap.min.css';

 function Card(){
  return(
    <>
    <div className="container">
    <div className="card">
      <div className="card-beader">MY PROFILE</div>
      <div className="card-body"><img className='card-image' src={ProfilePic} alt="profile picture" /></div>
      <div className="card-text">My name is Rency Boreh I am a Software Engineer student</div>
      <div className="card-footer">&copy; www.go.ke</div>
    </div>
    </div>
    
    </>
   
  );
 }
 export default Card