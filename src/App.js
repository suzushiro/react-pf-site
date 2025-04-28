import React, { useState } from 'react';
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

  return (
    <div className="App">
      <MenuBar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main className="content">
        <Header />
        {activeSection === 'about' && <About />}
        {activeSection === 'biography' && <Biography />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'photograph' && <Photograph />}
        {activeSection === 'djorganizechd' && <DJOrganizeCHD />}
      </main>
    </div>
  );
}

export default App;