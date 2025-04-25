import React, { useState, useEffect } from 'react';
import './MenuBar.css';

function MenuBar({ setActiveSection }) {
  const [highlightedSection, setHighlightedSection] = useState('about');

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId); // デバッグ用
    setActiveSection(sectionId); // 表示するセクションを更新
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Found element:', element); // デバッグ用
      element.scrollIntoView({ behavior: 'smooth' });
      setHighlightedSection(sectionId); // ハイライトを更新
    } else {
      console.log('Element not found for ID:', sectionId); // デバッグ用
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills'];
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
          className={highlightedSection === 'skills' ? 'active' : ''}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;