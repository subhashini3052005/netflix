import React from 'react'
import "./signin.css"
import netflix from "../asset/netflix.png"

 const Signin = () => {
  return (
    <div className="sign">
      <div className="a1">
      <img src={netflix} className='icon' alt="netflix" />
      <div className="contain">
       <h1>Sign In</h1>
       <div className="contain2">
        <input type="email" placeholder='' required />
        <label className='l1'>Email or mobile number</label>
        </div>
        <div className="contain3">
        <input type="password" placeholder='' required />
        <label className='l2'>Password</label>
        <button className='s1'>Sign In</button>
        <h3>OR</h3>
        <button className='s2'>Use a Sign-In Code</button>
        <a href="">forget password?</a>
       </div>
       <input type="checkbox" />
       <label >Remember me</label>
       <h2 >New to Netflix?<a href="">Sign up now.</a></h2>
       <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
       <a href="">learn more</a>
      </div>
      </div>

    </div>
  )
}
export default Signin;
