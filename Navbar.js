import React, { useState } from 'react'
import './navabar.css'
const Navbar = () => {
    const[menu,setmenu]=useState("Home")
  return (
    <div className='navbar'>

    <div className='spicestxt'>
                <h1>Spices</h1>

            </div>
        <div className='navbarlist'>
            
            <ul>

                <li onClick={()=>{setmenu("Home")}}>Home{menu=="Home"?<hr/>:<></>}</li>
                <li  onClick={()=>{setmenu("About")}}>About{menu=="About"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Product")}}>Product{menu=="Product"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Contact")}}>Contact{menu=="Contact"?<hr/>:<></>}</li>

            </ul>
          
           

        </div>
        <div className='navbarbtn'>
            <button className='btnsign'>Sign in </button>

            </div>
        
      
    </div>
  )
}

export default Navbar

