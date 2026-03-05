'use client';
import { useState, useEffect, useRef } from 'react';

export default function Typewriter({ text, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState('');
  const humRef = useRef(null);
  const containerRef = useRef(null);
  const autoScrollEnabled = useRef(true);

  useEffect(() => {
    let index = 0;

    // Play typing hum
    if (humRef.current) {
      humRef.current.volume = 0.08;
      humRef.current.loop = true;
      humRef.current.play().catch(() => {});
    }

    // Stop auto-scroll permanently on manual scroll
    const handleUserScroll = () => {
      autoScrollEnabled.current = false;
    };

    // Attach scroll listener to the nearest scrollable parent
    const scrollParent = containerRef.current?.parentElement || window;
    scrollParent.addEventListener('scroll', handleUserScroll);

    const interval = setInterval(() => {
      if (text && index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;

        if (autoScrollEnabled.current && containerRef.current) {
          // Get the scrollable parent
          const parent = containerRef.current.parentElement;

          if (parent) {
            const scrollBottom = containerRef.current.scrollHeight - parent.clientHeight;
            const currentScroll = parent.scrollTop;
            const distance = scrollBottom - currentScroll;

            if (distance > 0) {
              parent.scrollTo({ top: currentScroll + distance * 0.25, behavior: 'smooth' });
            }
          }
        }
      } else {
        clearInterval(interval);
        if (humRef.current) humRef.current.pause();
      }
    }, speed);

    return () => {
      clearInterval(interval);
      if (humRef.current) humRef.current.pause();
      scrollParent.removeEventListener('scroll', handleUserScroll);
    };
  }, [text, speed]);

  return (
    <>
      <audio ref={humRef} src="/hum.mp3" />
      <div
        ref={containerRef}
        className="text-pink-400 text-lg"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          whiteSpace: "pre-wrap",
          textShadow: "0 0 8px #ff69b4, 0 0 16px #ff69b4",
        }}
      >
        {displayedText}
        <span className="blink">|</span>
        <style jsx>{`
          .blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </>
  );
}