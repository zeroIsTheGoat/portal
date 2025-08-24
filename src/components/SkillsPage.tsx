import React, { useState } from 'react';
import { PageType } from '../App';
import { ArrowLeft } from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageType) => void;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('weapons');
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);

  const skillCategories = {
    weapons: {
      name: 'PROGRAMMING LANGUAGES',
      icon: '⚔️',
      skills: [
        { name: 'JavaScript Katana', rarity: 'legendary', level: 95, description: 'Master-tier ES6+ blade, cuts through any frontend challenge' },
        { name: 'TypeScript Samurai Sword', rarity: 'legendary', level: 92, description: 'Type-safe precision weapon with compile-time error detection' },
        { name: 'Python Neural Whip', rarity: 'epic', level: 88, description: 'Versatile AI manipulation tool for data science operations' },
        { name: 'Java Corporate Hammer', rarity: 'rare', level: 75, description: 'Enterprise-grade weapon for large-scale system demolition' },
        { name: 'C++ System Breaker', rarity: 'rare', level: 70, description: 'Low-level system penetration tool for performance-critical ops' },
        { name: 'Rust Memory Guardian', rarity: 'epic', level: 65, description: 'Memory-safe system protection with zero-cost abstractions' }
      ]
    },
    cyberware: {
      name: 'FRAMEWORKS & LIBRARIES',
      icon: '🧠',
      skills: [
        { name: 'React Neural Interface', rarity: 'legendary', level: 98, description: 'Advanced UI manipulation cybernetics with hook-based reflexes' },
        { name: 'Node.js Server Spine', rarity: 'legendary', level: 94, description: 'Backend nervous system for handling concurrent operations' },
        { name: 'Express.js Speed Boost', rarity: 'epic', level: 90, description: 'Rapid API development enhancement with middleware integration' },
        { name: 'MongoDB Data Cortex', rarity: 'epic', level: 85, description: 'NoSQL brain implant for flexible data storage and retrieval' },
        { name: 'GraphQL Query Optimizer', rarity: 'rare', level: 80, description: 'Efficient data fetching neural pathway with single endpoint access' },
        { name: 'Redis Cache Accelerator', rarity: 'rare', level: 78, description: 'Memory enhancement for lightning-fast data access' }
      ]
    },
    tools: {
      name: 'TOOLS & SOFTWARE',
      icon: '🔧',
      skills: [
        { name: 'Git Version Control Deck', rarity: 'legendary', level: 96, description: 'Time manipulation device for code versioning and collaboration' },
        { name: 'Docker Container Pod', rarity: 'epic', level: 88, description: 'Portable environment capsule for consistent deployment' },
        { name: 'AWS Cloud Arsenal', rarity: 'epic', level: 82, description: 'Scalable infrastructure weaponry for cloud-based operations' },
        { name: 'VS Code Neural Editor', rarity: 'rare', level: 95, description: 'Enhanced coding interface with AI-powered assistance' },
        { name: 'Postman API Scanner', rarity: 'rare', level: 85, description: 'API testing and documentation reconnaissance tool' },
        { name: 'Figma Design Matrix', rarity: 'rare', level: 75, description: 'Collaborative design interface for UI/UX prototyping' }
      ]
    },
    augments: {
      name: 'SOFT SKILLS',
      icon: '⚡',
      skills: [
        { name: 'Team Leadership Protocol', rarity: 'legendary', level: 92, description: 'Advanced group coordination and motivation algorithms' },
        { name: 'Problem Solving Matrix', rarity: 'legendary', level: 95, description: 'Critical thinking enhancement for complex challenge resolution' },
        { name: 'Communication Amplifier', rarity: 'epic', level: 88, description: 'Enhanced interpersonal data transmission capabilities' },
        { name: 'Agile Methodology Chip', rarity: 'epic', level: 85, description: 'Iterative development process optimization implant' },
        { name: 'Creative Thinking Booster', rarity: 'rare', level: 80, description: 'Innovative solution generation enhancement' },
        { name: 'Time Management Core', rarity: 'rare', level: 87, description: 'Efficient task prioritization and deadline management system' }
      ]
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return '#fcee0a';
      case 'epic': return '#b300ff';
      case 'rare': return '#00ffff';
      default: return '#00ff00';
    }
  };

  return (
    <div className="skills-page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          <ArrowLeft size={20} />
          MAIN MENU
        </button>
        <h1 className="page-title">
          <span className="title-icon">🎒</span>
          INVENTORY
          <span className="title-subtitle">Neural Augmentations & Equipment</span>
        </h1>
      </div>

      <div className="inventory-container">
        <div className="inventory-tabs">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`inventory-tab ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="inventory-grid">
          {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderColor: getRarityColor(skill.rarity)
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-rarity" style={{ color: getRarityColor(skill.rarity) }}>
                {skill.rarity.toUpperCase()}
              </div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">
                <div className="level-bar">
                  <div 
                    className="level-fill" 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: getRarityColor(skill.rarity)
                    }}
                  ></div>
                </div>
                <span className="level-text">LVL {skill.level}</span>
              </div>
              <div className="skill-glow" style={{ boxShadow: `0 0 20px ${getRarityColor(skill.rarity)}40` }}></div>
            </div>
          ))}
        </div>

        {hoveredSkill && (
          <div className="skill-tooltip">
            <div className="tooltip-header">
              <span className="tooltip-name">{hoveredSkill.name}</span>
              <span 
                className="tooltip-rarity" 
                style={{ color: getRarityColor(hoveredSkill.rarity) }}
              >
                {hoveredSkill.rarity.toUpperCase()}
              </span>
            </div>
            <div className="tooltip-description">{hoveredSkill.description}</div>
            <div className="tooltip-level">MASTERY LEVEL: {hoveredSkill.level}%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;