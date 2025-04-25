import React from 'react';
import './Skills.css';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <section id="skills" className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;