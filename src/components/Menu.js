import { Outlet, Link } from "react-router-dom"
import "../css/Menu.css"
import home_logo from "../images/home.svg"
import form_logo from "../images/form.ico"
import link_logo from "../images/link.ico"
import content_logo from "../images/content.ico"



import { useState } from "react";

const Menu=()=>{
const hoveroff={
        textDecoration: "none",
        display:"block",
        backgroundColor:"green",
        padding:"10px",
        width:"100%"
};

const hoveron={
        backgroundColor:"yellow",
        textDecoration: "none",
        display:"block",
        padding:"10px",
        width:"100%"
        
};


const [color,setColor]=useState(false);


function handlehover(command){
    setColor(command);
    
}

return(
    <>

    <ul>
    <li><img src={home_logo} alt="logo"/><Link className={color?"menu":"menu-def"} onMouseEnter={()=>handlehover(true)} onMouseLeave={()=>handlehover(false)} to="/">Home</Link></li>    
    <li><img src={form_logo} alt="logo"/><Link className={color?"menu":"menu-def"} onMouseEnter={()=>handlehover(true)} onMouseLeave={()=>handlehover(false)} to="/form">Form</Link></li>
    <li><img src={form_logo} alt="logo"/><Link className={color?"menu":"menu-def"} onMouseEnter={()=>handlehover(true)} onMouseLeave={()=>handlehover(false)} to="/myform">My Form</Link></li>
    <li><img src={form_logo} alt="logo"/><Link  className={color?"menu":"menu-def"} onMouseEnter={()=>handlehover(true)} onMouseLeave={()=>handlehover(false)} to="/submitform">Submit Form</Link></li>
    <li><img src={link_logo} alt="logo"/><Link className={color?"menu":"menu-def"} onMouseEnter={()=>handlehover(true)} onMouseLeave={()=>handlehover(false)} to="/nolink">No Link</Link></li>
    <li><img src={content_logo} alt="logo"/><Link className={color?"menu":"menu-def"} onMouseEnter={()=>handlehover(true)} onMouseLeave={()=>handlehover(false)} to="/content">Content</Link></li>
    </ul>   
    
    </>

);
}


export default Menu