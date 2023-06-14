import { useState } from 'react'
import reactLogo from './assets/react.svg'
import banner from './assets/banner.png'
import blobbackground from './assets/blobbackground.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [searchbar, setSearchBar] = useState();

  const handleChange = (e) => {

    setSearchBar(e.target.value);
  }

  return (
    <>
      <div className="header">
        <img height="35px" width="35px" src="./logo.png" />
        <div className="announcementbar">Podcast For Us All</div>
        <div style={{display: "flex", alignItems: "center"}}>
          <div style={{paddingRight: "5px"}}>Search</div>
          <input style={{marginRight: "5px"}} className="searchbar"onChange={(e)=>handleChange(e)}/>
        </div>
      </div>
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
      <div className="banner"
        style={{backgroundImage: `url(${banner}), url(${blobbackground})`,
                backgroundPosition: "center top, top right",
                backgroundRepeat: "no-repeat, no-repeat",
                height: "70%",
                backgroundSize: "cover"
              }}
        >
        <div className="calltoaction">
          <div className="bannerbuttondiv">
              <button className="bannerbutton">Get Started</button>
            </div>
           <div className="blobbackgroundtext">
              <p>View podcast, save your Favorites, and join the fun!</p>
            </div>
          </div>
        </div>
        <div className="podcastcarousel"></div>

      
    </>
  )
}

export default App
