import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import banner from './assets/banner.png'
import { motion } from "framer-motion";
import Slider from './components/Slider';
import blobbackground from './assets/blobbackground.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [searchbar, setSearchBar] = useState('');
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  const header = useRef();
  const mobileMenuItems = [];

  const switchMobileNav = () => {
    if (displayMobileNav == false) {
      setDisplayMobileNav(true)
    } 
    if (displayMobileNav == true) {
      setDisplayMobileNav(false)
    }
    
  }

  const handleChange = (e) => {
    setSearchBar(e.target.value);
  }

  return (
    <>
      <div ref={header} className="header">
        <img className="logo" onClick={switchMobileNav} height="35px" width="35px" src="./logo.png" />
        <div className="announcementbar">Podcast For Us All</div>
        <div style={{display: "flex", alignItems: "center"}}>
          <div style={{paddingRight: "5px"}}>Search</div>
          <input style={{marginRight: "5px"}} className="searchbar"onChange={(e)=>handleChange(e)}/>
        </div>
      </div>
        <motion.div 
        className={`mobilenav ${displayMobileNav ? "showmobilenav" : ""}`}>
          <div>Podcast</div>
          <div>Favorites</div>
          <div>Contact</div>
          <div>About Us</div>
          <div>Log In</div>
          <div>Register</div>
        </motion.div>
        {displayMobileNav?
        <></>
        :
          <div className="nav">
            <div className="left-nav">
              <div>Podcast</div>|
              <div>Favorites</div>|
              <div>Contact</div>|
              <div>About Us</div>|
            </div>
            <div className="right-nav">
              <div>Log In</div>|
              <div>Register</div>|
            </div>
          </div>
        }
      <div className="banner">
        <h1 style={{color: "white"}}> Tech Podcast For All!</h1>
        <div className="calltoaction">
          <div className="bannerbuttondiv">
              <button className="bannerbutton">Get Started</button>
            </div>
           <div className="blobbackgroundtext">
              <p>View podcast, save your Favorites, and join the fun!</p>
            </div>
          </div>
        </div>
        <h1 style={{position: "relative", top: "20px"}}>Recent Podcasts</h1>
        <div>
        <Slider/>
        </div>
        <div className="footer">
          <div className="footernav">
            <div>Podcast</div>
            <div>Favorites</div>
            <div>Contact</div>
            <div>About Us</div>
          </div>
          <div className="footerlinks">
              <div><a href="">terms of use</a></div>
              <div><a href="">privacy</a></div>
              <div><a href="">© 2023 CollinsCode</a></div>
          </div>
        </div>
    </>
  )
}

export default App
