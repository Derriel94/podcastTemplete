import { useState } from 'react'
import reactLogo from './assets/react.svg'
import banner from './assets/banner.png'
import image1 from './assets/1.png'
import image2 from './assets/2.png'
import image3 from './assets/3.png'
import image4 from './assets/4.png'
import Slider from './components/Slider';
import blobbackground from './assets/blobbackground.png'
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
        <img className="logo" height="35px" width="35px" src="./logo.png" />
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
        <h1 style={{color: "white"}}> Wicked Podcast For All!</h1>
        <div className="calltoaction">
          <div className="bannerbuttondiv">
              <button className="bannerbutton">Get Started</button>
            </div>
           <div className="blobbackgroundtext">
              <p>View podcast, save your Favorites, and join the fun!</p>
            </div>
          </div>
        </div>
        <h1>Podcasts</h1>
        <Slider/>
       {/* <div className="morebutton">
                  More.
            </div>*/}
      
    </>
  )
}

export default App
