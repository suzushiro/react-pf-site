import React, { useEffect } from 'react';
import './Skills.css';

function Skills({ className }) {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  useEffect(() => {
    console.log('Skills mounted with className:', className);
  }, [className]);

  return (
    <section id="skills" className={`skills ${className || ''}`}>
      <h3>IT Skills</h3> {/* Skills → IT Skills */}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;