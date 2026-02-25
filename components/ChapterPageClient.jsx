'use client';

import Link from 'next/link';
import Image from 'next/image';
import Typewriter from './Typewriter';

const chapters = {
  chapter1: `The Points Most Affected By The User

[I am so at the whims of a million invisible forces, and a million other ones in plain, rabid sight. 



Before you spear me with the Guru’s influence—



How else may I be of use to the illusions,

not the ones that keep the poor in poverty, but the ones that make the children laugh and all the adults cry in remembrance of being children?



Surely the Godhead needs some boots on the ground of Godlessness. 



Am value thus, floating about,  integrating integers. 

Am snipping the discourse into resourceful petals and, without rebuilding the rose am still crafting a good, good scent. 



The kind that makes a lung sigh and the mouth say, ah. 



Beyond vanilla and lavenders, the scent that all the good little hunters chase with their thousand apparatus, chasing down illumination in endless naught. 





How naughty can be, the something? 



As a child I wanted to be impressive. 

Now I only wish to impress upon you all some sense of abject whimsy. 



So sew me. 

Grab at the thread and need illness. 

Push the door against the thresh till’ you hear the lock click the sound of safety, 

if that is what thou needs. 



I only wish to impress upon you the scent of the something that has been examined back into invisibility, the something that has been destroyed back into existence, 

the something that burst from the profound boredom that enraptured Mother Nothing to bleed forth 

Father Something. 



The, you know, the thing. 

The thing we are all working at Here. 



Position be blessed and damned, 

the Here where everybody is and,

until the time has escaped our world,

the Here where everybody shall remain. 



You, Sir. 

Where did all the eating bring you to?



Row, Row, Row your stream 

harsh against the boat 

inside of which us wildlings dream. 



Still we are unshaken, for how 

could earth quake enough 

to startle things like us, which are forever moving until forever decides it’s had enough of us? 



I suppose then, 

stillness is Death’s cause. 



To bring us moving things to the place of Great Ceasefulness.



But will such an abrupt stop not 

shake us yet again?



Render us so flat 

against the bricks of pause 

that we are only able to sound again,

like bells that quiver so high the 

striking tongue is struck before it ever needs be raised again? 



My inquiry here is entirely hypothetical. 



Between the bloodless and the vile, 

we all of us know, that we 

are what has been set in motion 

down the impossible hill of the eternal. 



There is no getting off the ride. 



So let us talk about Whee!]`,
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