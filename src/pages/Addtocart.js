import React,{useState} from 'react'
import { goods } from '../data/goods/alpha';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../styles/Addtocart.css'

import Header from '../MyComponents/Header';
import Menu from '../MyComponents/Menu';
import Footer from '../MyComponents/Footer'





function Addtocart() {

const location = useLocation().pathname
var currentitem=location.substring(location.lastIndexOf('=')+1,location.length);
const [noofitem, setnoofitem] = useState(location.substring(location.lastIndexOf('quantity=')+9,location.lastIndexOf('quantity=')+10));

const [good, setgood] = useState(goods);
const [isChecked, setisChecked] = useState(0);





    return (
        <>

        <Header/>
        <Menu/>

       <div className="addtocart-main">
        {good.map((good_inside) =>
 {


    if(good_inside.id==currentitem)
    {
     
     
     return(<>
        
       

        <div className="toptitle">
            <h5>Pay faster for all your shopping needs <span>with Amazon Pay balance</span> </h5> 
          <p>Get Instant refund on cancellations | Zero payment failures</p>
           </div>


      <div className="addtocart">


        <div className="shoppingcart">
          <h2> Shopping Cart</h2> 
           <h4> Deselect all items</h4> 
           
           <hr />
            

            <div className="addtocart-items">

               <div className="addtocart-image">
               <Link to={"/description/"+currentitem}><img src={good_inside.image}   alt="Img_Notfound" /></Link>
               </div>
               <div className= "addtocart-desc">

               {/* <div>Sl: {good_inside.id}</div>  */}
               <Link to={"/description/"+currentitem}> <h2  >{good_inside.title}</h2></Link>
               <h3>&#8377; {good_inside.price}</h3>
               <div>Rating :&#9733; {good_inside.rating}</div>
               <p>Get it by <b>{good_inside.date}</b> </p>  
               <p> FREE Delivery by Amazon</p>
               <h5>Delete</h5>
               <div>
                   <span>Quantity: </span>
                   <select name="Quantity" className="quantity" value={noofitem} onChange={(e) => { setnoofitem(e.target.value)} }  >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                </div>
                




                </div>
            </div>

                 <p>Subtotal ({noofitem}): &#8377;  {noofitem*good_inside.price}</p> 

        </div>
        


        <div className="sidepricing">
        <div className="sidepricing-img">
         <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
        </div> 
        
           <div className="sidepricing-desc">
           <p>Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</p> 
            <h2>Subtotal ({noofitem}): &#8377;  {noofitem*good_inside.price}</h2>  
             <p> This order contains a gift </p>

            <Link to ={"/buynow/quantity="+noofitem+"+id="+good_inside.id}><button className="btn2" >Proceed to Buy</button></Link>      
            </div>


        </div>





        </div>


</>)
      }
 
 }
  )
}





        </div>

        <Footer />

            
        </>
    )
}

export default Addtocart
