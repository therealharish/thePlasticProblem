
import {React} from 'react'
import {useState} from 'react';
import './Home.css';
import backgroundVideo from '../videos/backgroundVid2.mp4'
import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'
import twitter from '../icons/twitter.png'
import More from "../More/More";
import {Link} from "react-router-dom"



const Home = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div>
      <section className={!isActive ? "showcase": "showcase active"}>
        <header>
          <div className="logo">wellwecare</div>
          <div className={!isActive ? "toggle": "toggle active"} onClick = {handleClick}></div>
        </header>
        <video src={backgroundVideo} type="video/mp4" muted loop autoPlay></video>

        <div className="overlay"></div>
        <div className="text">
          <h2>The Plastic Problem</h2>
          <h3>Tell leaders that a global treaty is needed to address the plastics crisis.</h3>
          <Link to="/more">
          <a href = "../More/More.js" className="btn">Learn More</a>
          </Link>
        </div>

        <ul class="social">
          <li>
            <a href="#">
              <img src={facebook} alt="" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" width="20" height="20" />
            </a>
          </li>
        </ul>
      </section>
      <div className='menu'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;