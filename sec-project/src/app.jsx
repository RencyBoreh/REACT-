import Header from './Header.jsx'
import Student from './props.jsx'
import Footer from './Head.jsx'
import Food from './food.jsx'
import Card from './card.jsx'
import Pupils from './pupils.jsx'
import Greet from './greeting.jsx'
import List from './list.jsx'
import Button from './Button.jsx'
import States from './states.jsx';
import Counter from './counter.jsx'
import OnChange from './onchange.jsx'
import ObjectUpdater from './object.jsx'
import ArrayManipulation from './arrays.jsx'
import HandleCar from './array.jsx'
import ToDoList from './To-Do-List-App.jsx'
import Useeffect from './useeffect.jsx'

export function App() {
  return (
    <>
      <Header />
      <hr />
      <ToDoList/>
      <Useeffect/>
      <HandleCar/>
      <ObjectUpdater/>
      <ArrayManipulation/>
      <States/>
      {/* <List /> */}
      {/* <Button /> */}
      <OnChange/>
      <Greet name='Rency' isStudent={true} />
      <Student name=' Rency Boreh' age={22} isStudent={false} />
      <hr />
      
      <Counter/>
      {/* <Student name=' Ressly Boreh' age={18} isStudent={true} />
      <hr />
      <Student name='Rency' age={20} isStudent={true} />
      <hr /> */}
      <Pupils name="Rency Jeptanui" age={22} school='Kirinyaga University' course="Software Engineering" />
      <hr />
      {/* <Pupils name="Ressly Jerop" age={18} school='Nairobi University' course="Chemical Engineering" />
      <hr /> */}
      {/* <Pupils name="Rabby Jepkorir" age={24} school='Kenyatta University' course="Computer Engineering" /> */}
      {/* <Card /> */}
      <Card />
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Food /> */}
      <Footer />
    </>

  );
}
