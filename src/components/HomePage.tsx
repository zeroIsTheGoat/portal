import React, { useEffect, useState } from 'react';
import { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [glitchText, setGlitchText] = useState('HARI PRASAD');

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText('H4R1 PR4S4D');
      setTimeout(() => setGlitchText('HARI PRASAD'), 100);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const menuItems = [
    { label: 'START GAME', sublabel: 'Projects', page: 'projects' as PageType },
    { label: 'CHARACTER', sublabel: 'About Me', page: 'about' as PageType },
    { label: 'INVENTORY', sublabel: 'Skills', page: 'skills' as PageType },
    { label: 'JOURNAL', sublabel: 'Hobbies', page: 'hobbies' as PageType },
    { label: 'NETWORK', sublabel: 'Contact', page: 'contact' as PageType },
  ];

  return (
    <div className="home-page">
      <div className="city-background"></div>
      <div className="rain-effect"></div>
      
      <div className="main-content">
        <div className="player-name">
          <h1 className={`glitch-text ${glitchText !== 'HARI PRASAD' ? 'glitching' : ''}`}>
            {glitchText}
          </h1>
          <div className="subtitle">NETRUNNER • FULL STACK DEVELOPER</div>
        </div>

        <div className="main-menu">
          {menuItems.map((item, index) => (
            <button
              key={item.page}
              className="menu-item"
              onClick={() => onNavigate(item.page)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="menu-icon">▶</span>
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
          <div className="hud-line">NEURAL LINK: ACTIVE</div>
          <div className="hud-line">SYNC: 100%</div>
        </div>
        <div className="top-right-hud">
          <div className="hud-line">NIGHT CITY</div>
          <div className="hud-line">2077.12.10</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;