import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Auth from './pages/Auth';
import PingPong from './pages/PingPong';

const App = () => {
  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-black">
        <nav className="absolute top-0 w-full flex justify-around p-4 bg-gray-800 text-white">
          <Link to="/auth" className="hover:underline">Auth</Link>
          <Link to="/ping-pong" className="hover:underline">Ping Pong</Link>
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
