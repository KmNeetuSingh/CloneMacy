import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <AllRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer isLoggedIn={isLoggedIn} />
    </Router>
  );
}

export default App;
