import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SkinTypeLanding from './pages/SkinTypeLanding';
import SkinTypeResult from './pages/SkinTypeResult';
import Signup from './register/signup';
import SignupProcess from './register/signupProcess';
import Login from './register/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skinTypeLanding" element={<SkinTypeLanding />} />
        <Route path="/skintype-result" element={<SkinTypeResult />} />

        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupProcess" element={<SignupProcess />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default App;