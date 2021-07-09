import React from 'react'
import acc from '../img/default.jpg';
import phone from '../content-img/phone.jpg';
const uname = 'Abhishek'

export default function ItemList1(props) {

     var {handlelogout,user}=props;
     
    
     if(user)
     {
    
      user=user.email.substring(0,user.email.indexOf("@"));
      user= user.charAt(0).toUpperCase()+ user.slice(1);
      user=user.toString()
     }
     else
     {
         user="Welcome ";

     }
     

return(
    <><div className="ItemList1">

       <div className="il11">
            <h2>Hi, {user}</h2>
            <img src={acc} alt="" />
            <a href=""><h5>Top links for you</h5></a>
            <content>
                <div className="products1a">
                     <img  src={phone} alt="" />
                    <p><a href=""> Your Orders</a></p>
                </div>
               <div className="products1b">
                    <img  src={phone} alt="" />
                    <p><a href=""> Mobile and Accessories</a></p>
               </div>

               <div className="products1c">
                    <img  src={phone} alt="" />
                    <p><a href=""> Mobile and Accessories</a></p>
               </div>

               <div className="products1d">
                    <img  src={phone} alt="" />
                    <p > <a href="">Mobile and Accessories</a> </p>
               </div>

            </content>

       </div>




       <div className="il12">
            <h2>Oxygen concentrators</h2>
           
            
            <content>
               <img  src={phone} alt="" />
               
            </content>
            <a className="link-seemore" href=""><h5> see more</h5></a>

       </div>
       <div className="il13">
            <h2>Top picks for your Home</h2>
            
            <content>
                <div className="products1a">
                     <img  src={phone} alt="" />
                    <p><a href=""> Your Orders</a></p>
                </div>
               <div className="products1b">
                    <img  src={phone} alt="" />
                    <p><a href=""> Mobile and Accessories</a></p>
               </div>

               <div className="products1c">
                    <img  src={phone} alt="" />
                    <p><a href=""> Mobile and Accessories</a></p>
               </div>

               <div className="products1d">
                    <img  src={phone} alt="" />
                    <p > <a href="">Mobile and Accessories</a> </p>
               </div>

            </content>
            <a className="link-seemore2" href=""><h5> see more</h5></a>
       </div>


       <div className="il14">
           <div>
               <h2>Shop on the Amazon App</h2>
               <p>Fast, convenient and secure |
               Over 17 crore products in your pocket</p>
               <a className="link-seemore2" href=""><h5>Download the Amazon App</h5></a>
           </div>
           
           
            <div>
               <h2>LAPTOPS FROM TOP BRANDS</h2>
               <img src={phone} alt="" />
               
            </div>

       </div>
      
       </div>
     </>
)
    
}
