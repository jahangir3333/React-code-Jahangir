import { useState } from "react";
import "../css/style.css"

function Submitform(){
    const [name,setName]=useState("");

    function handlechange(e){
        setName(e.target.value);
    }

    function handlesubmit(e){
        e.preventDefault();
        alert(name);
    }


    return(
    <>
    <h2>hello this is Form Page</h2>
    <form action="submit.js" method="POST" onSubmit={(e)=>handlesubmit(e)}>
        <label className="form">Enter Your Name:</label><br/>
        <input type="text" name="name" placeholder="Name" onChange={(e)=>handlechange(e)}/><br/><br/>
        <label className="form">Enter Your Email:</label><br/>
        <input type="text" name="email" placeholder="Email.."/><br/><br/>
        <label className="form">Enter Your Password</label><br/>
        <input type="password" name="password" placeholder="Password.."/><br/><br/>
        <input type="submit" value="Submit"/>



    </form>
    </>
    
    );
}


export default Submitform