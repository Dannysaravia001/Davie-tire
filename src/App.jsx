import React from 'react';
import './App.css';
import image from './components/davie.jpg';
import Home from './components/Home/Home';
import About from './components/About/About'; // Add this line

const App = () => {
  return (
    <>
      <div>
        <header className="header">
          <img src={image} alt="Davie Tire Shop" />
        </header>
      </div>
      <Home />
      <About /> {/* Add this line to render the About component */}
    </>
  );
}

export default App;