import React, {useState} from 'react';
import './LoginSignup.css';
import user_Icon from '../Assets/user_Icon.png';
import email_Icon from '../Assets/envelope_Icon.png';
import password_Icon from '../Assets/lock_Icon.png';
const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={user_Icon} alt="" />
            <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input">
            <img src={email_Icon} alt="" />
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
            <img src={password_Icon} alt="" />
            <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div> 
  )
}

export default LoginSignup
