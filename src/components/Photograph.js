import React, { useEffect } from 'react';
import './Photograph.css';

function Photograph({ className }) {
  useEffect(() => {
    console.log('Photograph mounted with className:', className);
  }, [className]);

  return (
    <section id="photograph" className={`photograph ${className || ''}`}>
      <h3>Photograph</h3>
      <p>Coming soon! My photography portfolio will be displayed here.</p>
    </section>
  );
}

export default Photograph;