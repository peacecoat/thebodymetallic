'use client';

import Link from 'next/link';
import Image from 'next/image';
import Typewriter from './Typewriter';

const chapters = {
  chapter1: `The Points Most Affected By The User

[Insert full text of Chapter 1 here]`,
  chapter2: `To Lack Deathlessness

[Insert full text of Chapter 2 here]`,
  chapter3: `Listen To The Scars, They Tell You Why

[Insert full text of Chapter 3 here]`,
  chapter4: `Location, Vocation, Cave Action

[Insert full text of Chapter 4 here]`,
  chapter5: `Avarice In The Name Of Charitable Acts

[Insert full text of Chapter 5 here]`,
  chapter6: `Animals Write

[Insert full text of Chapter 6 here]`,
  chapter7: `One Million Joints

[Insert full text of Chapter 7 here]`,
};

const chapterOrder = [
  'chapter1',
  'chapter2',
  'chapter3',
  'chapter4',
  'chapter5',
  'chapter6',
  'chapter7',
];

export default function ChapterPageClient({ chapter }) {
  if (!chapter || !chapters[chapter]) return <div>Chapter not found</div>;

  const content = chapters[chapter];
  const currentIndex = chapterOrder.indexOf(chapter);
  const prevChapter =
    currentIndex > 0 ? chapterOrder[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chapterOrder.length - 1
      ? chapterOrder[currentIndex + 1]
      : null;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start py-12 px-6 bg-black text-white"
    >
      {/* Home Button */}
      <Link
        href="/"
        className="absolute top-5 left-1/2 transform -translate-x-1/2"
      >
        <Image
          src="/home.png"
          alt="Home"
          width={50}
          height={50}
          className="hover-glow"
        />
      </Link>

      {/* Chapter Text */}
      <div className="max-w-3xl text-pink-400 text-lg mt-20 text-center">
        <Typewriter text={content} speed={40} />
      </div>

      {/* Navigation */}
      <div className="flex justify-between w-full max-w-md mt-12">
        {prevChapter ? (
          <Link href={`/chapters/${prevChapter}`}>
            <Image
              src="/prev.png"
              alt="Previous"
              width={40}
              height={40}
              className="hover-glow"
            />
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link href={`/chapters/${nextChapter}`}>
            <Image
              src="/next.png"
              alt="Next"
              width={40}
              height={40}
              className="hover-glow"
            />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Hover glow CSS */}
      <style jsx>{`
        .hover-glow:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px #ff66ff);
          transition: all 0.3s ease;
        }
      `}</style>
    </main>
  );
}