'use client';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  const chapters = [
    { title: "The Points Most Affected By The User", file: "chapter1.png", href: "/chapters/chapter1" },
    { title: "To Lack Deathlessness", file: "chapter2.png", href: "/chapters/chapter2" },
    { title: "Listen To The Scars, They Tell You Why", file: "chapter3.png", href: "/chapters/chapter3" },
    { title: "Location, Vocation, Cave Action", file: "chapter4.png", href: "/chapters/chapter4" },
    { title: "Avarice In The Name Of Charitable Acts", file: "chapter5.png", href: "/chapters/chapter5" },
    { title: "Animals Write", file: "chapter6.png", href: "/chapters/chapter6" },
    { title: "One Million Joints", file: "chapter7.png", href: "/chapters/chapter7" },
  ];

  return (
    <main
      style={{
        fontFamily: 'Didot, serif',
        textAlign: 'center',
        color: '#ff66ff',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000000',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Floating Home Button */}
      <Link href="/" style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Image
          src="/home.png"
          alt="home"
          width={50}
          height={50}
          style={{ transition: 'all 0.3s ease', filter: 'drop-shadow(0 0 5px #ff66ff)' }}
          className="hover-glow"
        />
      </Link>

      {/* Glowing Title */}
      <h1 style={{
        fontSize: '4em',
        marginBottom: '60px',
        textShadow: '0 0 8px #ff66ff, 0 0 15px #ff66ff, 0 0 25px #ff66ff',
      }}>
        the body metallic
      </h1>

      {/* Chapters list */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
        {chapters.map((chapter, idx) => (
          <Link key={idx} href={chapter.href} prefetch style={{ textDecoration: 'none', color: '#ff66ff' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
              className="hover-glow"
            >
              <Image
                src={`/${chapter.file}`}
                alt={chapter.title}
                width={200}
                height={200}
                style={{ objectFit: 'contain' }}
              />
              <p style={{ marginTop: '12px', fontSize: '1.2em', textTransform: 'lowercase' }}>
                {chapter.title.toLowerCase()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .hover-glow:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px #ff66ff);
        }
      `}</style>
    </main>
  );
}