import React from 'react';

export function AboutPage() {
  return (
    <div className="prose prose-emerald max-w-none">
      <h1>About Islamic Compass</h1>
      <p className="lead">
        Islamic Compass is your comprehensive companion for Islamic practices and spiritual growth.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        We aim to make Islamic practices and knowledge more accessible to Muslims worldwide,
        providing tools and resources that enhance their spiritual journey.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Accurate prayer times and Qibla direction</li>
        <li>Interactive Quran with translations and audio</li>
        <li>AI-powered Islamic guidance</li>
        <li>Educational resources and tools</li>
        <li>Community features and local mosque finder</li>
      </ul>
    </div>
  );
}