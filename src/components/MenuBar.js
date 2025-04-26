import React, { useState, useEffect } from 'react';
import './MenuBar.css';

function MenuBar({ setActiveSection }) {
  const [highlightedSection, setHighlightedSection] = useState('about');

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId);
    setActiveSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log('Found element:', element);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlightedSection(sectionId);
      } else {
        console.log('Element not found for ID:', sectionId);
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'photograph', 'djorganizechd'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setHighlightedSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="menu-bar">
      <ul>
        <li
          className={highlightedSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className={highlightedSection === 'djorganizechd' ? 'active' : ''}
          onClick={() => scrollToSection('djorganizechd')}
        >
          DJ & Organize(CHD)
        </li>
        <li
          className={highlightedSection === 'photograph' ? 'active' : ''}
          onClick={() => scrollToSection('photograph')}
        >
          Photograph
        </li>
        <li
          className={highlightedSection === 'skills' ? 'active' : ''}
          onClick={() => scrollToSection('skills')}
        >
          IT Skills
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;