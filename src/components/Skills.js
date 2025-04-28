import React, { useState, useEffect } from 'react';
import './Skills.css';
import {
  FaLinux,
  FaPython,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaStar,
} from 'react-icons/fa';
import { SiMysql, SiKubernetes } from 'react-icons/si';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Skills component mounted');
    const timer = setTimeout(() => {
      console.log('Triggering fade-in for Skills');
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const techStacks = [
    { name: 'Linux', icon: <FaLinux />, stars: 4 },
    { name: 'Python', icon: <FaPython />, stars: 5 },
    { name: 'JavaScript', icon: <FaJsSquare />, stars: 4 },
    { name: 'React', icon: <FaReact />, stars: 3 },
    { name: 'Docker', icon: <FaDocker />, stars: 3 },
    { name: 'AWS', icon: <FaAws />, stars: 2 },
    { name: 'Git', icon: <FaGitAlt />, stars: 4 },
    { name: 'SQL', icon: <FaDatabase />, stars: 3 },
    { name: 'Node.js', icon: <FaNodeJs />, stars: 3 },
    { name: 'HTML/CSS', icon: <><FaHtml5 /><FaCss3Alt /></>, stars: 5 },
    { name: 'MySQL', icon: <SiMysql />, stars: 3 },
    { name: 'Kubernetes', icon: <SiKubernetes />, stars: 2 },
  ];

  const projects = [
    {
      startYear: 2020,
      description: 'ECサイト開発',
      technologies: 'React, Node.js, AWS',
      role: 'フロントエンドエンジニア',
      income: 'XXX',
    },
    {
      startYear: 2021,
      description: '社内システム刷新',
      technologies: 'Python, Docker, MySQL',
      role: 'バックエンドエンジニア',
      income: 'XXX',
    },
    {
      startYear: 2023,
      description: 'クラウド移行プロジェクト',
      technologies: 'AWS, Kubernetes',
      role: 'クラウドエンジニア',
      income: 'XXX',
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        style={{
          color: index < count ? '#ffd700' : '#e0e0e0',
          margin: '0 2px',
        }}
      />
    ));
  };

  return (
    <section id="skills" className={`skills ${isVisible ? 'animate' : ''}`}>
      <h2>IT Skills</h2>
      <div className="tech-stack">
        {techStacks.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="tech-icon">{tech.icon}</div>
            <p>{tech.name}</p>
            <div className="tech-stars">{renderStars(tech.stars)}</div>
          </div>
        ))}
      </div>
      <div className="projects">
        <h3>プロジェクト履歴</h3>
        <table>
          <thead>
            <tr>
              <th>開始年</th>
              <th>概要</th>
              <th>技術</th>
              <th>ポジション</th>
              <th>期間</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.startYear}</td>
                <td>{project.description}</td>
                <td>{project.technologies}</td>
                <td>{project.role}</td>
                <td>{project.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Skills;