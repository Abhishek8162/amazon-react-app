import React from 'react'
import prime from '../img/prime.png'

export default function Menu() {
return(
    <>
    <div className="Menu">
    <h5> <a href="">All</a> </h5>
    <h5><a href="">Amazon Pay</a> </h5>
    <h5><a href="">Best Sellers</a> </h5>
    <h5><a href="">Mobiles</a> </h5>
    <h5><a href=""> Prime</a></h5>
    <h5><a href=""> Abhishek's Amazon.in </a></h5>
    <h5><a href=""> Buy Again</a></h5>
    <h5><a href=""> Customer Service</a></h5>
    <h5><a href=""> Today's Deals</a></h5>
    <img src={prime}/>

    </div>
     </>
)
    
}
