import React, { useState } from 'react';
import './togglebutton.css'

function Toggle() {
    const [show,setShow]=useState(true)
    return ( 
        <div className="toggles">
            {
                show?<></>:
                <><h4>Monocrystalline Solar <br />Polycrstalline Solar</h4></>
            }
            {/* <button className='tgbut' onClick={()=>setShow(true)} >Birds</button>
            <button className='tgbut' onClick={()=>setShow(false)} >Dog</button> */}
            <button onClick={()=>setShow(!show)} >Solar Type</button> 
        </div>
     );
}

export default Toggle;
