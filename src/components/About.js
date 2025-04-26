import React, { useEffect } from 'react';
import './About.css';

function About({ className }) {
  useEffect(() => {
    console.log('About mounted with className:', className);
  }, [className]);

  return (
    <section id="about" className={`about ${className || ''}`}>
      <h3>About Me</h3>
      <p>
        はじめまして！山田太郎です。Reactを使ったWeb開発を学びながら、シンプルで使いやすいサイトを作るのが好きです。
      </p>
    </section>
  );
}

export default About;