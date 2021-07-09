import React from 'react'
import menu1 from '../menu-img/1 (1).png';
import menu2 from '../menu-img/1 (2).png';
import menu3 from '../menu-img/1 (3).png';
import menu4 from '../menu-img/1 (4).png';
import menu5 from '../menu-img/1 (5).png';


var menus =[menu1,menu4,menu3,menu5,menu2];

  


export default function MenuItem() {
return(
    <>
    <div className="MenuItem">

    <img className="MenuItems" src={menus[1]} alt="" />
{/* 
    {menus.map(menu => ( 
   document.getElementsByClassName("MenuItems").src=menu,
   console.log( document.getElementsByClassName("MenuItems").src)
    ))} */}
    

    
{/* {document.getElementsByClassName("MenuItems").src=menus[3] }
{console.log(menus[3])}
{console.log(document.getElementsByClassName("MenuItems").src)} */}
    </div>
     </>
)
    
}
