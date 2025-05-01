
import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const interactionHandlerRef = useRef(null);
  const playTimeoutRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3; // Set volume to 30%
    audio.loop = true;

    // Define the interaction handler
    interactionHandlerRef.current = () => {
      audio.play().catch(e => console.log("Playback failed:", e));
      document.removeEventListener('click', interactionHandlerRef.current);
      document.removeEventListener('touchstart', interactionHandlerRef.current);
    };

    // Try to play automatically after 5 seconds
    playTimeoutRef.current = setTimeout(() => {
      audio.play().catch(error => {
        console.log("Autoplay blocked. Waiting for user interaction...");
        // Enable music after first interaction
        document.addEventListener('click', interactionHandlerRef.current);
        document.addEventListener('touchstart', interactionHandlerRef.current);
      });
    }, 3000); // 3000ms = 3 seconds

    return () => {
      // Cleanup
      clearTimeout(playTimeoutRef.current);
      audio.pause();
      if (interactionHandlerRef.current) {
        document.removeEventListener('click', interactionHandlerRef.current);
        document.removeEventListener('touchstart', interactionHandlerRef.current);
      }
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src="/audio/background-music.mp3" 
      style={{ display: 'none' }}
      preload="auto"
    />
  );
}


