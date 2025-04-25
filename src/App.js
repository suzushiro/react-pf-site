import React, { useState } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <MenuBar setActiveSection={setActiveSection} />
      <main className="content">
        <Header />
        {activeSection === 'about' && <About />}
        {activeSection === 'skills' && <Skills />}
      </main>
    </div>
  );
}

export default App;