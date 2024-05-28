import "../css/style.css"
import logo from "../images/logo.jpg"
import { useState } from "react";




function Header(){

    const [logohover, setLogohover] = useState(false);
    function logohandler(command){
        setLogohover(command);
    };


return(
    <>
    <div className="header">

<a href={logo}>
<img className={logohover?"logo-hover":"logo-hover-off"} onMouseEnter={()=>logohandler(true)} onMouseLeave={()=>logohandler(false)} src={logo} alt="logo" />
</a>

<h1>Md Jahangir Hussain</h1>
<h3>The inner story about my self 😭 with learning React js</h3>

</div>

    </>
);
}


export default Header;