import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import HobbiesPage from './components/HobbiesPage';
import ContactPage from './components/ContactPage';
import AudioPlayer from './components/AudioPlayer';
import './styles/cyberpunk.css';

export type PageType = 'home' | 'projects' | 'about' | 'skills' | 'hobbies' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const navigateToPage = (page: PageType) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigateToPage} />;
      case 'about':
        return <AboutPage onNavigate={navigateToPage} />;
      case 'skills':
        return <SkillsPage onNavigate={navigateToPage} />;
      case 'hobbies':
        return <HobbiesPage onNavigate={navigateToPage} />;
      case 'contact':
        return <ContactPage onNavigate={navigateToPage} />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <div className="cyberpunk-app">
      <AudioPlayer audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
      <div className={`page-container ${isTransitioning ? 'transitioning' : ''}`}>
        {renderCurrentPage()}
      </div>
      <div className="cyberpunk-cursor"></div>
    </div>
  );
}

export default App;