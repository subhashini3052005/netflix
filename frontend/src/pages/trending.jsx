import React, { useState } from 'react'
import "./trending.css"
import one from "../asset/st.jpeg"
import two from "../asset/img2.jpeg"
import three from "../asset/img3.jpeg"
import four from "../asset/dude.jpeg"
import five from "../asset/five.png"
import six from "../asset/six.png"
 const Trending = () => {
  const[showmenu,setshowmenu]=useState(false);
  const[showmenu1,setshowmenu1]=useState(false);
  const[showmenu2,setshowmenu2]=useState(false);
  const[showmenu3,setshowmenu3]=useState(false);
  const[showmenu4,setshowmenu4]=useState(false);
  const[showmenu5,setshowmenu5]=useState(false);
  return (
    <div className="trending">
        <hr className='line' />
        <div className="wrapper">
          <h1>Trending Now</h1>
          <div className="center">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
          </div>

        </div>
        <div className="wrapper2">
          <h1>More reasons to join</h1>
          <div className="ct">
          <div className="container">
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="container">
            <h1>Download your shows to watch offline</h1>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
          <div className="container">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="container">
            <h1>Create profiles for kids</h1>
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
          </div>
          </div>
        </div>
        <div className="wrapper3">
          <h1>Frequently Asked Questions</h1>
          <div className="ct1">
            <button onClick={()=>setshowmenu(!showmenu)}>What is Netflix?</button>
            {showmenu && (
              <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br /><br />

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
            )}
          </div>
          <div className="ct2">
            <button onClick={()=>setshowmenu1(!showmenu1)}>How Much Does Cost?</button>
            {showmenu1 && (
              <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.</p>
            )}
          </div>
          <div className="ct3">
            <button onClick={()=>setshowmenu2(!showmenu2)}>Where Can I Watch? </button>
            {showmenu2 && (
              <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            )}
          </div>
          <div className="ct4">
            <button onClick={()=>setshowmenu3(!showmenu3)}>How do I Cancel?</button>
            {showmenu3 && (
              <p>Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            )}
          </div>
          <div className="ct5">
            <button onClick={()=>setshowmenu4(!showmenu4)}>What Can I Watch On Netflix</button>
            {showmenu4 && (
              <p>Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            )}
          </div>
          <div className="ct6">
            <button onClick={()=>setshowmenu5(!showmenu5)}>Is Netflix good for Kids?</button>
            {showmenu5 && (
              <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            )}
          </div>
        </div>
        <div className="wrapper4">
          <p>Ready to watch?enter your email to create or restart your membership</p>     
       <div className="b3">
        <input type="email" placeholder='' required />
        <label >Email address</label>
        <button className='getstarted'>Get Started</button>
        </div>
        </div>
        <div className="wrapper5">
          <p>Questions? Call <a href="">000-800-919-1743</a></p>
          <div className="column">
            <a href="">FAQ</a>
            <a href="">Investor Relations</a>
            <a href="">Privacy</a>
            <a href="">Speed Test</a>
            <a href="">Help center</a>
            <a href="">Jobs</a>
            <a href="">Cookie Preferences</a>
            <a href="">Legal Notices</a>
            <a href="">Accounts</a>
            <a href="">Ways to watch</a>
            <a href="">Corporate Information</a>
            <a href="">Only on Netflix</a>
            <a href="">Media Centre</a>
            <a href="">Terms of Use</a>
            <a href="">Contact Us</a>   
           </div>
           <div className="right">
        <select className='lang'>
          <option value="">English</option>
          <option value="option1">Hindi</option>
          <option value="option2">Telugu</option>
        </select> 
        </div>
        <p>Netflix India</p>
        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">learn more</a></p>
        </div>
    </div>
  )
}
export default Trending;
