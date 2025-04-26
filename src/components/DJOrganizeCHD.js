import React, { useEffect } from 'react';
import './DJOrganizeCHD.css';

function DJOrganizeCHD({ className }) {
  useEffect(() => {
    console.log('DJOrganizeCHD mounted with className:', className);
  }, [className]);

  return (
    <section id="djorganizechd" className={`djorganizechd ${className || ''}`}>
      <h3>DJ & Organize(CHD)</h3>
      <p>Coming soon! Details about my DJ events and CHD organization will be displayed here.</p>
    </section>
  );
}

export default DJOrganizeCHD;