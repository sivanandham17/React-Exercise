import React, {useState} from 'react'
import './time.css'

const Day = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return ( 
    <>
    <h1 className='time'> {ctime} </h1>
    </>
   );
}
export default Day;

