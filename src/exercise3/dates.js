import React from 'react';
import './dates.css';


function Dates() {

   const d = new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'may', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()

  return (
  	<>
    <div className="main">
          <div className="dates">        
             <div className='d1'><h2>{day} - </h2></div>
             <div className='d1'><h2 id="date">{date}</h2></div>
             <div className='d1'><h2 id="month">{month}</h2></div>
             <div className='d1'><h2 id="year">{year}</h2></div>
          </div>
     </div>
  </>
  );
}

export default Dates;
