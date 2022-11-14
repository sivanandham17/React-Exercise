import React from "react";
import './solar.css'

const Birds = () => {


    return ( 
        <>
        <h2 className="h1">Solar Shop</h2>
        <div className="home">
            <div><img className="img" src="../../assets/pc1.jpg" alt="bird"/>
        </div>
        <div className="subhome">
            <select className="select">
                <option>Monocrystalline solar</option>
                <option>Polycrystalline solar</option>
                {/* <option>African Lovebirds</option>
                <option>Finch</option> */}
            </select><br/><br/>
            
            <button className="button">Submit</button>
        </div>
        </div>
            <p className="p">
                <ul>
                    <li>Solar panels, sometimes also called photovoltaics collect energy from the Sun in the form of sunlight and convert it into electricity that can be used to power homes or businesses. These panels can be used to supplement a building's electricity or provide power at remote locations</li><br/><br/>
                    <li> The most commonly used solar technologies for homes and businesses are solar photovoltaics for electricity, passive solar design for space heating and cooling, and solar water heating. Businesses and industry use solar technologies to diversify their energy sources, improve efficiency, and save money.</li>
                </ul>
            </p>

        </>
     );
}
 
export default solar;