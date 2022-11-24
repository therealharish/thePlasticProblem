import './App.css';
import backgroundVideo from './components/videos/backgroundVid2.mp4'
import facebook from './components/icons/facebook.png'
import instagram from './components/icons/instagram.png'
import twitter from './components/icons/twitter.png'



function App() {
  return (
    <div>
      <section className = "showcase">
        <header>
          <div className = "logo">wellwecare</div>
          <div className = "toggle"></div>
        </header>
        <video src = {backgroundVideo} type = "video/mp4" muted loop autoPlay></video>
      
        <div className = "overlay"></div>
        <div className = "text">
          <h2>The Plastic Problem</h2>
          <h3>Tell leaders that a global treaty is needed to address the plastics crisis.</h3>
          <a href = "https://www.plasticpollutioncoalition.org/" className = "btn">Learn More</a>
        </div>

        <ul class = "social">
          <li>
            <a href = "#">
              <img src = {facebook} alt ="" width = "20" height = "20"/>
            </a>
          </li>
          <li>
            <a href = "#">
              <img src = {instagram} alt =""width = "20" height = "20"/>
            </a>
          </li>
          <li>
            <a href = "#">
             <img src = {twitter} alt =""width = "20" height = "20"/>
            </a>
          </li>
        </ul>

        <div className='Menu'>
          <ul>
            <li><a href = "#">Home</a></li>
            <li><a href = "#">About</a></li>
            <li><a href = "#">Contact</a></li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default App;
