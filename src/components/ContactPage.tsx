import React, { useState } from 'react';
import { PageType } from '../App';
import { ArrowLeft, Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    // Simulate transmission
    setTimeout(() => {
      setIsTransmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('TRANSMISSION COMPLETE - Message sent successfully!');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      description: 'Code Repository',
      faction: 'NETRUNNERS GUILD',
      url: 'https://github.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      description: 'Corporate Network',
      faction: 'ARASAKA CORP',
      url: 'https://linkedin.com'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      description: 'Public Feed',
      faction: 'STREET RUNNERS',
      url: 'https://twitter.com'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      description: 'Direct Channel',
      faction: 'SECURE COMM',
      url: 'mailto:contact@example.com'
    }
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          <ArrowLeft size={20} />
          MAIN MENU
        </button>
        <h1 className="page-title">
          <span className="title-icon">📡</span>
          NETWORK LINK
          <span className="title-subtitle">Establish Communication Protocol</span>
        </h1>
      </div>

      <div className="contact-container">
        <div className="comms-terminal">
          <div className="terminal-header">
            <div className="terminal-title">SECURE COMMUNICATION CHANNEL</div>
            <div className="terminal-status">
              <span className="status-indicator active"></span>
              NEURAL LINK: ACTIVE
            </div>
          </div>

          <form className="message-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">SENDER ID:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="cyber-input"
                placeholder="Enter your name..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">NEURAL ADDRESS:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="cyber-input"
                placeholder="your.email@nightcity.net"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE PAYLOAD:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="cyber-textarea"
                rows={6}
                placeholder="Encode your message here... Neural encryption protocols active."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isTransmitting ? 'transmitting' : ''}`}
              disabled={isTransmitting}
            >
              <Send size={20} />
              {isTransmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        <div className="social-networks">
          <div className="networks-header">
            <h3>FACTION NETWORKS</h3>
            <p>Alternative Communication Channels</p>
          </div>

          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="social-icon">{link.icon}</div>
                <div className="social-info">
                  <div className="social-name">{link.name}</div>
                  <div className="social-description">{link.description}</div>
                  <div className="social-faction">{link.faction}</div>
                </div>
                <div className="social-glow"></div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-info">
          <div className="info-panel">
            <h4>LOCATION</h4>
            <p>Night City, California Free State</p>
          </div>
          <div className="info-panel">
            <h4>TIMEZONE</h4>
            <p>Pacific Standard Time (PST)</p>
          </div>
          <div className="info-panel">
            <h4>RESPONSE TIME</h4>
            <p>Usually within 24 hours</p>
          </div>
        </div>
      </div>

      <div className="transmission-effect">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="data-stream" style={{ left: `${i * 5}%` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;