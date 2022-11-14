import React from 'react'
import './solarcard.css'

const Card = () => {
    return ( 
        <>
        <div className='one'>
            <div className='card'>
                <img src='../../assets/pc2.jpg' alt='card'/>
                <div className='container'>
                    <h3>MONOCRYSTALLINE SOLAR</h3>
                    {/* <p>Yellowface</p> */}
                </div>
                <div><button>Add to Cart</button></div>

            </div>
        
            <div className='card'>
                <img src='../../assets/pc3.jpg' alt='card'/>
                <div className='container'>
                    <h3>POLYCRYSTALLINE SOLAR</h3>
                    {/* <p>Pied Blue</p> */}
                </div>
                <div><button>Add to Cart</button></div>

            </div>

            <div className='card'>
                <img src='../../assets/pc4.jpg' alt='card'/>
                <div className='container'>
                    <h3>MONOCRYSTALLINE SOLAR</h3>
                    {/* <p>Zebra finches</p> */}
                </div>
                <div><button>Add to Cart</button></div>
            </div>
            
        </div>
        
        </>
     );
}
 
export default Card;