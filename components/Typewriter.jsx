'use client';
import { useState, useEffect, useRef } from 'react';

export default function Typewriter({ text, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState('');
  const humRef = useRef(null);

  useEffect(() => {
    let index = 0;

    if (humRef.current) {
      humRef.current.volume = 0.08;
      humRef.current.loop = true;
      humRef.current.play().catch(() => {});
    }

    const interval = setInterval(() => {
      if (text && index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        if (humRef.current) humRef.current.pause();
      }
    }, speed);

    return () => {
      clearInterval(interval);
      if (humRef.current) humRef.current.pause();
    };
  }, [text, speed]);

  return (
    <>
      <audio ref={humRef} src="/hum.mp3" />
      <div
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