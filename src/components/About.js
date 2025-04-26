import React, { useEffect } from 'react';
import './About.css';

function About({ className }) {
  useEffect(() => {
    console.log('About mounted with className:', className);
  }, [className]);

  return (
    <section id="about" className={`about ${className || ''}`}>
      <h3>About this Page</h3>
      <p>
        このページではsuzushiroの個人活動や主にインフラエンジニアとしての経歴をまとめています。
      </p>
    </section>
  );
}

export default About;