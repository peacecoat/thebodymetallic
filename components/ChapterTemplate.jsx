'use client';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from './Typewriter';

export default function ChapterTemplate({ content, prevHref, nextHref }) {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center text-center py-12 px-6">
      {/* Home Button */}
      <Link href="/">
        <div className="mb-8">
          <Image src="/home.png" alt="home" width={50} height={50} className="hover-glow"/>
        </div>
      </Link>

      {/* Chapter Text */}
      <Typewriter text={content} speed={40} />

      {/* Navigation */}
      <div className="flex justify-between w-full max-w-md mt-12">
        {prevHref ? <Link href={prevHref}><Image src="/prev.png" alt="prev" width={40} height={40} className="hover-glow"/></Link> : <div />}
        {nextHref ? <Link href={nextHref}><Image src="/next.png" alt="next" width={40} height={40} className="hover-glow"/></Link> : <div />}
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