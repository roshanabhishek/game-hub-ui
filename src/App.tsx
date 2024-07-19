import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Auth from './pages/Auth';
import PingPong from './pages/PingPong';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/auth">Auth</Link>
          <Link to="/ping-pong">Ping Pong</Link>
        </nav>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/ping-pong" element={<PingPong />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
