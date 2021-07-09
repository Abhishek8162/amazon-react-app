import React,{useState} from 'react'
import { goods } from '../data/goods/alpha';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../styles/Buynow.css'



export default function Buynow()
{

    const location = useLocation().pathname
    var currentitem=location.substring(location.lastIndexOf('=')+1,location.length);
    const [noofitem, setnoofitem] = useState(location.substring(location.lastIndexOf('quantity=')+9,location.lastIndexOf('quantity=')+10));
    
    const [good, setgood] = useState(goods);
    const [isChecked, setisChecked] = useState(0);
    
    



    return (
        <>
          
        <div className="buynow">
        {good.map((good_inside) =>
 {


    if(good_inside.id==currentitem)
    {
     
     
     return(<>
        
       

        <div className="toptitle">

            <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif" alt="" />  </div>
            <h2>Select a delivery address</h2>    
            <h3>On the move? Pick up your order from our pickup store.   </h3> 
            
            <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/x-site/cvs/logo/pickup_flag_icon._CB485948013_.png" alt="" /> <div><h4>Orders for select areas in select cities can now be delivered to Amazon pickup locations. Search for a Pickup location near you</h4></div></div>    
           
            </div>
            
               <hr />
             

          <div className="buynow-content">         
            <div className="addressform">
            <h2>   Add a new address </h2>

            <form action="/placed">
             <h5>Country/Region</h5> 
             <input type="text" required />

             <h5> Full name (First and Last name)</h5> 
             <input type="text" required />

             <h5>Mobile number </h5> 
             <input type="text" required />

             <h5>PIN code</h5> 
             <input type="text" required  />

             <h5>Flat, House no., Building, Company, Apartment</h5> 
             <input type="text" required />

             <h5>Area, Colony, Street, Sector, Village</h5> 
             <input type="text" required  />
 
             <h5>Landmark</h5> 
             <input type="text" required />


             <h5>Town/City</h5> 
             <input type="text" required />


             <h5>State / Province / Region</h5> 
             <input type="text" required />

             <h5>    State / Province / Region</h5> 
             <input type="text"required  />

              <div><input type="submit" value="Add Address"/></div>







            </form>
               </div> 

          <div className="pickup">
 
           <h2>Search for a Pickup location near you</h2>
           <h5>Amazon’s new service allows you to have your orders delivered at pickup stores located at some convenient locations in select cities. It’s simple, safe and convenient. Learn more</h5>

          <form action="" onSubmit={()=>{alert("We will add your city soon !")}}>
           
             <div>
             <h5>Search by Address: </h5> 
             <input type="text" />
             </div>
             
             <div>
             <h5>Search by Pincode: </h5> 
             <input type="text" />
              </div>

             <div>
             <h5>    State / Province / Region</h5> 
             <input type="text" />
             </div>

             <div>
             <h5>  Search by Locker or Store Name:</h5> 
             <input type="text" />
             </div>


              <div><input type="submit" value="Search"/></div>
   
          </form>

          </div>








           </div> 



                 </>  )  
    }   }  )}

        </div>

                 

            
        </>
    )
}




