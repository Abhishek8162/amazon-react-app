import React from 'react'
import logo from '../img/logo.jpg';
import srch from '../img/magnifying-glass-1976105_1280.png';


export default function Header() {
return(
    <><div className="Header">
        
       <img src={logo} alt="Img not found" />
       <h4>Select your Address</h4>
       <input type="text"/>
       <div className="box0">
       <img src={srch} alt="Img not found" />
       </div>

       <h4>Accounts and Lists</h4>
       <h4>Returns and Orders</h4>
      
       </div>
     </>
)
    
}
