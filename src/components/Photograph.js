import React, { useState, useEffect } from 'react';
import './Photograph.css';

function Photograph() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Photograph component mounted');
    const timer = setTimeout(() => {
      console.log('Triggering fade-in for Photograph');
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="photograph" className={`photograph ${isVisible ? 'animate' : ''}`}>
      <h2>Photograph</h2>
      <p>写真作品や撮影活動について記載します。</p>
    </section>
  );
}

export default Photograph;