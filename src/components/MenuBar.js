import React from 'react';
import './MenuBar.css';

function MenuBar({ setActiveSection, activeSection }) {
  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId);
    setActiveSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log('Found element:', element);
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Element not found for ID:', sectionId);
      }
    }, 400);
  };

  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <button
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'biography' ? 'active' : ''}
            onClick={() => scrollToSection('biography')}
          >
            Biography
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'djorganizechd' ? 'active' : ''}
            onClick={() => scrollToSection('djorganizechd')}
          >
            DJ & Organize(CHD)
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'photograph' ? 'active' : ''}
            onClick={() => scrollToSection('photograph')}
          >
            Photograph
          </button>
        </li>
        <li>
          <button
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => scrollToSection('skills')}
          >
            IT Skills
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;