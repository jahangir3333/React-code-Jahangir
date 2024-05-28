import React from 'react'
import login_logo from "../images/home.svg"
import "../css/style.css"

function Login() {
  return (
    <>
    <div className='login-box'>
    <img src={login_logo} alt="login-logo" />
        <h1>Login</h1>
        <div className='login-content'>
          
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' placeholder='Email'/><br/><br />
        <label htmlFor="password">Password:</label>
        <input type="text" name='password' placeholder='Password' /><br /><br />
       <div className="login-buttons">
       <input type="submit" name='submit' value='Login' />

       <input type="submit" name='reset' value='Reset' />

       </div>
        </div>
        
        
        </div>
    
    
    </>
  )
}

export default Login