import React from 'react';
import { PageType } from '../App';
import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const stats = [
    { name: 'PROBLEM SOLVING', value: 95, color: '#00ffff' },
    { name: 'CODING SKILLS', value: 90, color: '#ff0080' },
    { name: 'CREATIVITY', value: 85, color: '#00ff00' },
    { name: 'TECH MASTERY', value: 88, color: '#ffff00' },
    { name: 'COMMUNICATION', value: 82, color: '#ff8000' },
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          <ArrowLeft size={20} />
          MAIN MENU
        </button>
        <h1 className="page-title">
          <span className="title-icon">👤</span>
          CHARACTER PROFILE
          <span className="title-subtitle">Neural Interface Data</span>
        </h1>
      </div>

      <div className="character-container">
        <div className="character-avatar">
          <div className="avatar-frame">
            <div className="avatar-image"></div>
            <div className="avatar-scan"></div>
          </div>
          <div className="avatar-info">
            <h2>HARI PRASAD</h2>
            <div className="character-class">FULL STACK NETRUNNER</div>
            <div className="character-level">LEVEL 99</div>
          </div>
        </div>

        <div className="character-stats">
          <h3 className="stats-title">CORE ATTRIBUTES</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.name} className="stat-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="stat-name">{stat.name}</div>
                <div className="stat-bar">
                  <div 
                    className="stat-fill" 
                    style={{ 
                      width: `${stat.value}%`,
                      backgroundColor: stat.color,
                      boxShadow: `0 0 10px ${stat.color}`
                    }}
                  ></div>
                  <span className="stat-value">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="character-bio">
          <h3 className="bio-title">NEURAL PROFILE</h3>
          <div className="bio-content">
            <div className="bio-section">
              <h4>BACKGROUND</h4>
              <p>
                Born in the digital age, Hari emerged as a prodigy in the realm of code manipulation 
                and digital architecture. Starting from the underground hacking scenes of the early 
                web, they evolved into a legendary full-stack netrunner, capable of navigating both 
                frontend interfaces and backend neural networks with unmatched precision.
              </p>
            </div>
            
            <div className="bio-section">
              <h4>SPECIALIZATION</h4>
              <p>
                Master of React.js neural interfaces, Node.js server architecture, and quantum 
                database manipulation. Known throughout Night City's tech underground for building 
                impossible systems and solving unsolvable problems. Current focus on AI integration 
                and blockchain security protocols.
              </p>
            </div>
            
            <div className="bio-section">
              <h4>ACHIEVEMENTS</h4>
              <ul>
                <li>Successfully completed 50+ high-profile digital heists (projects)</li>
                <li>Mastered 15+ programming languages and frameworks</li>
                <li>Built neural networks that revolutionized e-commerce platforms</li>
                <li>Recognized expert in cybersecurity and blockchain technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;