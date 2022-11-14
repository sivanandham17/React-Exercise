// import Birds from './exercise12.js/solar'
// import Card from './exercise12.js/solarcard';
// import Dates from './exercise3/dates';
// import Day from './exercise3/time';
import Student from './exercise4/propsdata';
import './App.css';
import Toggle from './exercise5/togglebutton';
import Form from './exercise7/form'
import React,{useState} from 'react';
import Todo from './exercise9/Todo'
import Calci from './exercise6/calci'

function App() {
  const [name,setName]=useState("siva")
  // function apple()
  // {
  //   alert("hello")
  // }
  return (
    <div className="App">
     <h1>Props in React :</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("hi")}} >Update Name</button>
     <Toggle />
     <Todo/>
     <Form />
     <Calci/>
    
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Birds />
  //       <Card />
  //       <Dates />
  //       <Day />
  //     </header>
  //   </div>
  // )
}

export default App;
