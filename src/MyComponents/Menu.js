import React from 'react'
import prime from '../img/prime.png'
import { Link } from "react-router-dom";

export default function Menu(props) {
    var {handlelogout,user}=props;



    if(user)
    {
   
     user=user.email.substring(0,user.email.indexOf("@"));
     user= user.charAt(0).toUpperCase()+ user.slice(1);
     user=user.toString()
    }
    else
    {
        user="Explore";

    }
 

console.log(user)
return(
    <>
    <div className="Menu">
    <h5> <a href="">All</a> </h5>
    <h5><a href="">Amazon Pay</a> </h5>
    <h5><a href="">Best Sellers</a> </h5>
    <h5><a href="">Mobiles</a> </h5>
    <h5><a href=""> Prime</a></h5>

    <h5><a href="">{user} Amazon.in </a></h5>
  
    <h5><a href=""> Buy Again</a></h5>
    <h5><a href=""> Customer Service</a></h5>
    <h5><a href="" onClick={handlelogout}> Logout</a></h5>
    <Link to="/"><img src={prime}/></Link>   

    </div>
     </>
)
    
}
