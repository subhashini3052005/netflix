import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="f1">
          <h2>Questions? Call <a href="">000-800-919-1743(Toll-Free)</a></h2>
          <div className="f2">
            <a href="">FAQ</a>
            <a href="">Privacy</a>
            <a href="">Help center</a>
            <a href="">Cookie Preferences</a>
            <a href="">Corporate Information</a>
            <a href="">Terms of Use</a> 
           </div>
           <div className="f3">
        <select className="lang">
          <option value="">English</option>
          <option value="option1">Hindi</option>
          <option value="option2">Telugu</option>
        </select> 
        </div>
        </div>
    </div>
  )
}
export default Footer;