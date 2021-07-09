import React,{useState} from 'react'
import { goods } from '../data/goods/alpha';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../styles/Description.css'

import Header from '../MyComponents/Header';
import Menu from '../MyComponents/Menu';
import Footer from '../MyComponents/Footer'


function Description(props) {
    const location = useLocation().pathname
    var current=location.substring(location.lastIndexOf('/')+1,location.length);

    const [good, setgood] = useState(goods);
    const [isChecked, setisChecked] = useState(1);
    // var isChecked=0;


    return (
        <>
<Header  />
      <Menu/> 

      {good.map((good_inside) =>
 {


    if(good_inside.id==current)
    {
     
     
     return(<>
        

<div className="top">

   <div className="description-img">
    <img src={good_inside.imagedesc} alt="" />
   </div>

   <div className="description-top">
   <h3  >{good_inside.title}</h3>
   <h5>Visit the Official Store</h5>
   <div>Rating :&#9733; {good_inside.rating}</div>
    <hr />
    <div>
    <p>10 Days Replacement</p>
    <p>1 Year Warranty Care</p> 
    </div>
    
    <hr />
    <h3>&#8377; {good_inside.price}</h3>
    <p>Get it by <b>{good_inside.date}</b> </p>  
    <p> FREE Delivery by Amazon</p>

   </div>

   <div className="buynow">
   
   <p><b> Add a Protection Plan:</b></p>
   <p>1 Years Extended Warranty for {good_inside.price/12}</p>
   <p>2 Years Extended Warranty for {good_inside.price/6}</p>

    <div>
   <span>Quantity: </span>
   <select name="Quantity" className="quantity" onChange={(e) => { setisChecked(e.target.value)} } >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    
   </div>
   <br />


      <Link to ={"/addtocart/quantity="+isChecked+"+id="+good_inside.id}><button className="btn1" >Add to cart</button></Link> 

      <Link to ={"/buynow/quantity="+isChecked+"+id="+good_inside.id}><button className="btn2" >Buy Now</button></Link> 
       

   </div>

</div>


</>)
      }
 
 }
  )
}

<hr />

<Footer />
            
        </>
    )
}

export default Description
