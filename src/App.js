import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import Header from './components/Header';
import About from './components/About';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Photograph from './components/Photograph';
import DJOrganizeCHD from './components/DJOrganizeCHD';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    console.log('Active section changed:', activeSection);
    setAnimate(false);
    setTimeout(() => {
      console.log('Triggering animation');
      setAnimate(true);
    }, 100);
  }, [activeSection]);

  return (
    <div className="App">
      <MenuBar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main className="content">
        <Header />
        {activeSection === 'about' && (
          <About className={animate ? 'animate' : ''} />
        )}
        {activeSection === 'biography' && (
          <Biography className={animate ? 'animate' : ''} />
        )}
        {activeSection === 'skills' && (
          <Skills className={animate ? 'animate' : ''} />
        )}
        {activeSection === 'photograph' && (
          <Photograph className={animate ? 'animate' : ''} />
        )}
        {activeSection === 'djorganizechd' && (
          <DJOrganizeCHD className={animate ? 'animate' : ''} />
        )}
      </main>
    </div>
  );
}

export default App;