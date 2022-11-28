import {React} from 'react'
import './App.css';
import Home from './components/Home/Home.js'
import More from "./components/More/More";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router >
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/more" element={<More />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
