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
        <input className="searchbar" onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="nav">
        <div className="left-nav">
          <div>Podcast</div>|
          <div>Favorits</div>|
          <div>Contact</div>|
          <div>About Us</div>|
        </div>
        <div className="right-nav">
          <div>Log In</div>
          <div>Register</div>
        </div>
      </div>
      <div className="banner"
        style={{backgroundImage: `url(${banner})`,
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                height: "80vh",
                backgroundSize: "cover"}}
        >
        <div className="blobbackground"
          style={{backgroundImage: `url(${blobbackground})`,
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                height: "600px",
                backgroundSize: "auto"}}
        >
         <div className="blobbackgroundtext">
            <p>View podcast, save your Favorits, and join the fun!</p>
          </div>
        </div>

        <div className="podcastcarousel"></div>

      </div>
    </>
  )
}

export default App
