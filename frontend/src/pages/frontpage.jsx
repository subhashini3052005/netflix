import React from 'react'
import "./frontpage.css"
import netflix from "../asset/netflix.png"
import { Link } from 'react-router-dom'
const Frontpage = () => {
  return (
    <div className="frontpage">
      <div className="b1">
        <img src={netflix} className='icon' alt="netflix" />
        <div className="right">
        <select className='lang'>
          <option value="">English</option>
          <option value="option1">Hindi</option>
          <option value="option2">Telugu</option>
        </select>
        <Link className='signin' to = "/signin" >Sign In</Link>
        </div>
      </div>
      <div className="header">
        <h1>Unlimited Movies,<br /> shows, and Mores<h2>Start at $149,Cancel at anytime</h2></h1>
        <p>Ready to watch?enter your email to create or restart your membership</p>     
       <div className="b2">
        <input type="email" placeholder='' required />
        <label >Email address</label>
        <button className='getstarted'>Get Started</button>
         </div>
     </div>  
    </div>
  )
}
export default Frontpage;
