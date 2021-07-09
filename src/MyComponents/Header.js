import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.jpg';
import srch from '../img/magnifying-glass-1976105_1280.png';

// Link to={`/${search}`}


export default function Header() 
{

  const [search, setSearch] = useState('');

return(
    <><div className="Header">
        
       <Link className="Linklogo" to ="/"> <img src={logo} alt="Img not found" /> </Link>
       <h4>Select your Address</h4>

       <form action={"results/" + search.toLowerCase()}       >
         <input type="text"  onChange={(e) => setSearch(e.target.value)}/> 
         </form>

        
       <div className="box0">
       <Link to={"results/" + search.toLowerCase()} ><img src={srch}   /></Link> 
       </div>

       <Link to= '/login'>
        <h4>Accounts and Lists</h4>
      </Link> 
      <Link to= '/Login'>
        <h4>Returns and Orders</h4>
      </Link>
       
       </div>
     </>
)
    
}
