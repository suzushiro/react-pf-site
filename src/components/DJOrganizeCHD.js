import React, { useState, useEffect } from 'react';
import './DJOrganizeCHD.css';

function DJOrganizeCHD() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('DJOrganizeCHD component mounted');
    const timer = setTimeout(() => {
      console.log('Triggering fade-in for DJOrganizeCHD');
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="djorganizechd" className={`djorganizechd ${isVisible ? 'animate' : ''}`}>
      <h2>DJ & Organize(CHD)</h2>
      <p>DJ活動やイベント運営（CHD）について記載します。</p>
    </section>
  );
}

export default DJOrganizeCHD;