import React, { useEffect, useState } from 'react';
import { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [glitchText, setGlitchText] = useState('HARI PRASAD');

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText('H4R1_PR4S4D');
      setTimeout(() => setGlitchText('HARI PRASAD'), 150);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  const menuItems = [
    { label: 'PROJECTS', sublabel: 'View Portfolio', page: 'projects' as PageType, icon: '⚡' },
    { label: 'CHARACTER', sublabel: 'About Me', page: 'about' as PageType, icon: '👤' },
    { label: 'INVENTORY', sublabel: 'Skills & Tech', page: 'skills' as PageType, icon: '🎒' },
    { label: 'JOURNAL', sublabel: 'Interests', page: 'hobbies' as PageType, icon: '📓' },
    { label: 'CONTACT', sublabel: 'Get In Touch', page: 'contact' as PageType, icon: '📡' },
  ];

  return (
    <div className="home-page">
      <div className="city-background"></div>
      <div className="scan-lines"></div>
      
      <div className="main-content">
        <div className="player-name">
          <h1 className={`glitch-text ${glitchText !== 'HARI PRASAD' ? 'glitching' : ''}`}>
            {glitchText}
          </h1>
          <div className="subtitle">FULL STACK DEVELOPER • NETRUNNER</div>
        </div>

        <div className="main-menu">
          {menuItems.map((item, index) => (
            <button
              key={item.page}
              className="menu-item"
              onClick={() => onNavigate(item.page)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="menu-icon">{item.icon}</span>
              <div className="menu-text">
                <span className="menu-label">{item.label}</span>
                <span className="menu-sublabel">{item.sublabel}</span>
              </div>
              <div className="menu-glow"></div>
            </button>
          ))}
        </div>
      </div>

      <div className="hud-elements">
        <div className="top-left-hud">
          <div className="hud-line">SYSTEM: ONLINE</div>
          <div className="hud-line">STATUS: READY</div>
        </div>
        <div className="top-right-hud">
          <div className="hud-line">LOCATION: DIGITAL</div>
          <div className="hud-line">VERSION: 2.0</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;