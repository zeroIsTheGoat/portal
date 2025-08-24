import React, { useState } from 'react';
import { PageType } from '../App';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageType) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      name: 'E-COMMERCE PLATFORM',
      type: 'WEB APPLICATION',
      description: 'Full-stack marketplace with real-time inventory and secure payment processing',
      rewards: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      status: 'COMPLETED',
      difficulty: 'LEGENDARY',
      completion: 100,
      details: 'Developed a comprehensive e-commerce platform with advanced features including real-time inventory management, secure payment processing, and AI-powered product recommendations.',
      images: ['https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg']
    },
    {
      id: 2,
      name: 'CRYPTOCURRENCY WALLET',
      type: 'BLOCKCHAIN APP',
      description: 'Secure digital wallet with multi-signature support and DeFi integration',
      rewards: ['Solidity', 'Web3.js', 'React', 'Express'],
      status: 'COMPLETED',
      difficulty: 'EPIC',
      completion: 100,
      details: 'Built a secure cryptocurrency wallet with advanced security features, multi-signature support, and seamless DeFi protocol integration.',
      images: ['https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg']
    },
    {
      id: 3,
      name: 'AI CHATBOT SYSTEM',
      type: 'MACHINE LEARNING',
      description: 'Intelligent conversational AI with advanced NLP and learning capabilities',
      rewards: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      status: 'IN PROGRESS',
      difficulty: 'LEGENDARY',
      completion: 75,
      details: 'Developing an advanced AI chatbot system with machine learning capabilities for natural conversation, context awareness, and intelligent task automation.',
      images: ['https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg']
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          <ArrowLeft size={20} />
          MAIN MENU
        </button>
        <h1 className="page-title">
          <span className="title-icon">⚡</span>
          QUEST LOG
          <span className="title-subtitle">Available Gigs & Completed Jobs</span>
        </h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-header">
              <div className="project-type">{project.type}</div>
              <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </div>
            </div>
            
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-rewards">
              <div className="rewards-label">TECH STACK:</div>
              <div className="rewards-list">
                {project.rewards.map((reward, i) => (
                  <span key={i} className="reward-tag">{reward}</span>
                ))}
              </div>
            </div>
            
            <div className="project-footer">
              <div className={`difficulty ${project.difficulty.toLowerCase()}`}>
                {project.difficulty}
              </div>
              <div className="completion-bar">
                <div 
                  className="completion-fill" 
                  style={{ width: `${project.completion}%` }}
                ></div>
                <span className="completion-text">{project.completion}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.name}</h2>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="project-image">
                <img src={selectedProject.images[0]} alt={selectedProject.name} />
              </div>
              
              <div className="project-details">
                <p>{selectedProject.details}</p>
                
                <div className="project-links">
                  <button className="project-link">
                    <Github size={20} />
                    VIEW CODE
                  </button>
                  <button className="project-link">
                    <ExternalLink size={20} />
                    LIVE DEMO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;