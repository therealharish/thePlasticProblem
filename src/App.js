import {React} from 'react'
import './App.css';
import Home from './components/Home/Home.js'
import More from "./components/More/More";
import Action from "./components/Action/Action";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Challenge from './components/Challenge/Challenge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router >
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/more" element={<More />} />
          <Route exact path="/action" element={<Action />} />
          <Route exact path="/challenge" element={<Challenge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
