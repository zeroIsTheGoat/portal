import React, { useState } from 'react';
import { PageType } from '../App';
import { ArrowLeft, Music, BookOpen, Gamepad2, Play } from 'lucide-react';

interface HobbiesPageProps {
  onNavigate: (page: PageType) => void;
}

const HobbiesPage: React.FC<HobbiesPageProps> = ({ onNavigate }) => {
  const [selectedHobby, setSelectedHobby] = useState<string>('music');
  const [cheatCode, setCheatCode] = useState<string>('');
  const [secretUnlocked, setSecretUnlocked] = useState(false);

  const hobbies = {
    music: {
      icon: <Music size={24} />,
      title: 'NEURAL SOUNDTRACKS',
      subtitle: 'Audio Enhancement Protocols',
      items: [
        {
          name: 'Cyberpunk 2077 OST',
          type: 'Synthwave Collection',
          description: 'Complete soundtrack from Night City\'s underground scene',
          status: 'Currently Playing',
          details: 'Features tracks from Samurai, including "Never Fade Away" and "Chippin\' In"'
        },
        {
          name: 'Synthwave Essentials',
          type: 'Retro-Future Vibes',
          description: 'Classic 80s-inspired electronic music for late-night coding sessions',
          status: 'Favorite Playlist',
          details: 'Artists: Carpenter Brut, Dance With The Dead, Power Glove, Lazerhawk'
        },
        {
          name: 'Lo-Fi Hip Hop Neural Feed',
          type: 'Focus Enhancement',
          description: 'Ambient beats for deep programming focus and concentration',
          status: 'Work Mode Active',
          details: 'Perfect for debugging sessions and algorithm optimization'
        }
      ]
    },
    books: {
      icon: <BookOpen size={24} />,
      title: 'DATA SHARDS',
      subtitle: 'Knowledge Acquisition Files',
      items: [
        {
          name: 'Neuromancer by William Gibson',
          type: 'Classic Cyberpunk Literature',
          description: 'The foundational text of cyberpunk culture and neural interface concepts',
          status: 'Archive Complete',
          details: 'Groundbreaking novel that defined the cyberpunk genre and inspired countless developers'
        },
        {
          name: 'Clean Code by Robert Martin',
          type: 'Programming Philosophy',
          description: 'Essential coding principles for maintainable and scalable software',
          status: 'Reference Material',
          details: 'Core principles that shape every line of code I write in the corporate net'
        },
        {
          name: 'The Phoenix Project',
          type: 'DevOps Chronicles',
          description: 'IT operations and continuous delivery transformation guide',
          status: 'Recently Acquired',
          details: 'Insights into managing complex systems and improving development workflows'
        }
      ]
    },
    games: {
      icon: <Gamepad2 size={24} />,
      title: 'VIRTUAL REALITY SIMS',
      subtitle: 'Entertainment & Training Protocols',
      items: [
        {
          name: 'Cyberpunk 2077',
          type: 'Open World RPG',
          description: 'Night City exploration and netrunner training simulation',
          status: 'Main Quest Complete',
          details: 'Over 200 hours exploring every district, mastering hacking mini-games'
        },
        {
          name: 'The Witcher 3: Wild Hunt',
          type: 'Fantasy RPG Epic',
          description: 'Complex narrative-driven adventure with meaningful choices',
          status: 'All DLC Complete',
          details: 'Incredible storytelling that influences my approach to user experience design'
        },
        {
          name: 'Portal Series',
          type: 'Puzzle Solving Training',
          description: 'Advanced problem-solving and logical thinking enhancement',
          status: 'Speed Run Records',
          details: 'Perfect training for debugging complex algorithms and system architecture'
        }
      ]
    }
  };

  const handleCheatCodeInput = (e: React.KeyboardEvent) => {
    const key = e.key;
    let newCode = cheatCode + key;
    
    const targetCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    
    if (targetCode.startsWith(newCode)) {
      setCheatCode(newCode);
      if (newCode === targetCode) {
        setSecretUnlocked(true);
        setCheatCode('');
      }
    } else {
      setCheatCode('');
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleCheatCodeInput as any);
    return () => window.removeEventListener('keydown', handleCheatCodeInput as any);
  }, [cheatCode]);

  return (
    <div className="hobbies-page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          <ArrowLeft size={20} />
          MAIN MENU
        </button>
        <h1 className="page-title">
          <span className="title-icon">📓</span>
          SIDE MISSIONS
          <span className="title-subtitle">Personal Interest Archives</span>
        </h1>
      </div>

      <div className="hobbies-container">
        <div className="hobbies-nav">
          {Object.entries(hobbies).map(([key, hobby]) => (
            <button
              key={key}
              className={`hobby-tab ${selectedHobby === key ? 'active' : ''}`}
              onClick={() => setSelectedHobby(key)}
            >
              <span className="hobby-icon">{hobby.icon}</span>
              <div className="hobby-text">
                <span className="hobby-title">{hobby.title}</span>
                <span className="hobby-subtitle">{hobby.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="hobby-content">
          <div className="hobby-header">
            <h2>{hobbies[selectedHobby as keyof typeof hobbies].title}</h2>
            <p>{hobbies[selectedHobby as keyof typeof hobbies].subtitle}</p>
          </div>

          <div className="hobby-items">
            {hobbies[selectedHobby as keyof typeof hobbies].items.map((item, index) => (
              <div key={item.name} className="hobby-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-type">{item.type}</span>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-footer">
                  <span className={`item-status ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item.status}
                  </span>
                  {selectedHobby === 'music' && (
                    <button className="play-button">
                      <Play size={16} />
                    </button>
                  )}
                </div>
                <div className="item-details">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {secretUnlocked && (
        <div className="secret-modal">
          <div className="secret-content">
            <h2 className="secret-title">🎉 CHEAT CODE ACTIVATED!</h2>
            <p className="secret-message">
              Congratulations, fellow netrunner! You've discovered the legendary Konami Code. 
              Here's a secret: I once spent 3 days debugging a single semicolon error, 
              and it turned out to be a missing semicolon in a completely different file! 
              The neural pathways work in mysterious ways... 🤖
            </p>
            <button className="secret-close" onClick={() => setSecretUnlocked(false)}>
              JACK OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HobbiesPage;