import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('About component mounted');
    const timer = setTimeout(() => {
      console.log('Triggering fade-in for About');
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className={`about ${isVisible ? 'animate' : ''}`}>
      <h2>About</h2>
      <p>このページではsuzushiroの個人活動や主にインフラエンジニアとしての経歴をまとめています。</p>
    </section>
  );
}

export default About;