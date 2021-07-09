import React,{useState} from 'react'
import { goods } from '../data/goods/alpha';
import '../styles/Results.css'
import Error from './Error'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import Header from '../MyComponents/Header';
import Menu from '../MyComponents/Menu';
import Footer from '../MyComponents/Footer'

export default function Results(props) 
{
const [good, setgood] = useState(goods);

const location = useLocation().pathname
var current=location.substring(location.lastIndexOf('/')+1,location.length);
var count =0; 
    
    return (
    <>
      <Header  />
      <Menu/> 

<div className="results_div">

    
<div className="filter">

<h3>Department</h3> 
<p>Smartphones &  </p>
<p> Basic Mobiles</p>
<p>Mobile Accessories</p>
<p>Electronics</p>
<p><h5>See All  Departments</h5></p>

<h3> Customer Review</h3>
<p>&#9733;&#9733;&#9733;&#9733;&#9734;  & Up</p> 
<p> &#9733;&#9733;&#9733;&#9734;&#9734;& Up</p> 
<p>&#9733;&#9733;&#9734;&#9734;&#9734; & Up</p>
<p>&#9733;&#9734;&#9734;&#9734;&#9734; & Up</p> 

<h3>Brand</h3>
<h3>{current}</h3>
<p> Redmi</p>
<p>Samsung</p>
<p>Oppo</p>
<p>Panasonic</p>
<p>Tecno</p>
<p>Vivo</p>
<p>realme</p>
<p>Nokia</p>
<p>IKALL</p>
<p>Micromax</p>
<p><h5>show less</h5></p>

<h3>Price</h3>
<p>Under ₹1,000</p>
<p>₹1,000 - ₹5,000</p>
<p>₹5,000 - ₹10,000</p>
<p>₹10,000 - ₹20,000</p>

<h3>Internal Memory</h3>
<p>Less than 3.9 GB</p>
<p>4 GB</p>
<p>8 GB</p>
<p>16 GB</p>
<p>32 GB</p>
<p>64 GB</p>
<p>128 GB</p>
<p>256 GB and above</p>

<h3>RAM</h3>
<p>8 GB and above</p>
<p>6 GB</p>
<p>4 GB</p>
<p>3 GB</p>
<p>2 GB</p>
<p>1 GB</p>
<p>Less than 512 MB</p>

<h3>Item Condition</h3>
<p>New</p>
<p>Used</p>

<h4>Discount</h4>
<p>10% Off or more</p>
<p>25% Off or more</p>
<p>35% Off or more</p>
<p>50% Off or more</p>

<h3>Availability</h3>
<p>Include Out of Stock</p>

</div>

<div class="vl"></div>  

<article>

{good.map((good_inside) =>
 {
count=good_inside.id

if(good_inside.category==current)
{
    return(<>
    
 {/* key={good_inside.id} */}
 {  }


 <div className="article-items">

<div className="article-image">
<Link to={"/description/"+count}><img src={good_inside.image}   alt="Img_Notfound" /></Link>
</div>
<div className= "article-desc">

{/* <div>Sl: {good_inside.id}</div>  */}
<Link to={"/description/"+count}> <h2  >{good_inside.title}</h2></Link>
<h3>&#8377; {good_inside.price}</h3>
<div>Rating :&#9733; {good_inside.rating}</div>
<p>Get it by <b>{good_inside.date}</b> </p>  
<p> FREE Delivery by Amazon</p>


 </div>
 

</div>
<hr />
</>);
}

})


}
{
 ()=>{if(current==null){ return(<Error/>)}}
}
 </article>




</div>

<div className="bottom-buttons">
  <button>1</button> 
  <button>2</button> 
  <button>3</button> 
  <span> ...10</span>
  <button>Next </button> 
  
</div>


<Footer />
      </>

    )
}
