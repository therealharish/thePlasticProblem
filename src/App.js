import './App.css';
import backgroundVideo from './components/videos/backgroundVideo.mp4'
function App() {
  return (
    <div>
      <section className = "showcase">
        <header>
          <div>Title</div>
          <div className = "toggle"></div>
        </header>
        <video src = {backgroundVideo} type = "video/mp4" muted loop autoPlay></video>
      
        <div className = "overlay"></div>
        <div className = "text">
          <h2>The Plastic Problem</h2>
          <h3>Tell leaders that a global treaty is needed to address the plastics crisis.</h3>
          <button className = "btn" variant="contained" color="primary">Sign the Petition</button>
        </div>

        <ul class = "social">
          <li><img src = "facebook.png" alt =""/></li>
          <li><img src = "instagram.png" alt =""/></li>
          <li><img src = "twitter.png" alt =""/></li>
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
