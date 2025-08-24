import React, { useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioEnabled, setAudioEnabled }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      if (audioEnabled) {
        audioRef.current.play().catch(() => {
          // Auto-play was blocked, which is expected
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioEnabled]);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  return (
    <div className="audio-player">
      <button onClick={toggleAudio} className="audio-toggle">
        {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        <span>AUDIO</span>
      </button>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* We'll use a data URL for a simple synthesized tone since we can't use external audio files */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUfBjiR1/LNeSsFJHfH8N2QQAoUXrTp66hVFA==" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;