import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Alarm from './Components/Alarm';
import TimeZone from './Components/TimeZone';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/alarm' element={<Alarm/>} />
            <Route exact path='/timezone' element={<TimeZone/>} />
            <Route exact path='/timer' element={<Timer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
