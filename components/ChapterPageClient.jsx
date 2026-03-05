'use client';

import Link from 'next/link';
import Image from 'next/image';
import Typewriter from './Typewriter';

const chapters = {
  chapter1: `The Points Most Affected By The User

[I am so at the whims of a million invisible forces, and a million other ones in plain, rabid sight. 



And Before you spear me with the Guru’s influence—



How else may I be of use to the illusions,

not the ones that keep the poor in poverty, but the ones that make the children laugh and all the adults cry in remembrance of being children?



Surely the Godhead needs some boots on the ground of Godlessness. 



Am value thus, floating about,  integrating integers. 

Am snipping the discourse into resourceful petals and, without rebuilding the rose am still crafting a good goo’s scent. 



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

striking tongue is struck before it ever need be raised again? 



My inquiry here is entirely hypothetical. 



Between the bloodless and the vile, 

we all of us know, that we 

are what has been set in motion 

down the impossible hill of the eternal. 



There is no getting off the ride. 



So let us bleed joy like a purse of sunshine struck, bleed it open upon the terror’s sled!]`,
  chapter2: `To Lack Deathlessness

[To noose, the Bladder

which holds the everlasting;



is it still a deed in the public

if no one is around? 



powers weird from the consulate strange, they attach themselves 

to the thin body metallic as its conduit,

its throttle and heath  





confound it and all,

finding mood eternal in my triumph of mediocrity 



so help me, God

sort us the punk bunch 

from the appled sog, that knowing remnant which glass we made to both pierce and reflect the things we bear witness to and are born in the sigh of…



beneath the stone, 

putting my tongue to my cuts 



and when you asked who cut me



all i could say was “people were sharp and i was clumsy, 
gravity did the rest”



stretching between 

the beautiful and the pathetic, 

yon sweet enduring loop of the two as one



him lauds the darker gospel, 

the gospel that escapes from 

the horse’s pale mouth which death has left mounted outside the heavens as he, with nimble finger,

courts a ring around the heaven’s hand



and we could make a trillion mirrors out of the embrace of just two grains

of the heaven sand 



and, when the wisp’s will is to rest in ash,

we shall be the thing that connects this forever to the dying breath; 

we shall be heaven’s and]`,
  chapter3: `Listen To The Scars, They Tell You Why

[I would love to know your intent,

sayeth he with hungry bludgeon 

I would love to know your hunger,

sayeth he with belly full 

I would love to have enough to share,

sayeth he that owns the luncheon

I would love to fill you all with beauty,

sayeth he who is beautiful 

We would love to comprehend,

sayeth those that pray for living 

We would love to be awakened,

sayeth those that pray for sleep

We would love to understand,

sayeth those that play forgiving

Yet We ought to hide our hands,

sayeth those that play for keeps





I would love to know, 

sayeth he who little cares



watch, ants

seek the act of my independent termination with your own beadeyes



tis not you i slay 

but rather my indifference for thee

my violent nothing 

that keeps a muscled hostel 

prim below the prickles 

that divide my heart in half 



yea, you hungry for emptiness 

have your cake, but you must eat

for others hunger deep

for the dreams the greedy keep 



honey is for the bees, 

those drones whose labor seeks

to maintain the inner balance

instead of outward peace



i need not catch a single fly;

my honey is for the bees  

so if thou art aggressor,

my sugar is not for thee—

hark my acid rain, destroyer

my acid reigns for thee]`,
  chapter4: `Location, Vocation, Cave Action

[Where pumps the plump tone,

me and my doofus interior chew against the rind of the night’s underwing 



am feeling muscular, in the ways that builders of both the outer and inner are privy to 



am feeling like a worm, mounting on the basilisk with knowing that i may be the smaller crawler, but i trawl with a precious heart and curious mind



me and the stoneseer both,

we be stone the romance,

and carve our lard givings to its height,

scrawling with such passion that we made the marbled sun himself shed a cry 

from the teat of his eyes



i think i will rest upon the wife earthen, 

and with teeth count the many ways i could be a thing to count upon, to rely in and spew forth from 



i love the dust that suckles at my arms when i lean on dingy human counters 

i love when i can let go of beautiful people

so that i can be free to be beautiful as well

i love when ample sound stretches through so many impossible obstacles to touch my foolish ears 

i love when putrid touch is not too afraid to lick the bath of mine hands

and i love when others give me the space i require to become a holy grail for them to so intimately sip from it is hard to tell where my brim begins and their hungry lips end



i think a wick extends from my brome 

and not ornamental is my moonbeam plea

so go ahead, bring lights to the ends of my thought 

go ahead, be the sight at the end of me



i could probably use it, dark little me 



Can i get a little napkin? 

I wish not to wipe but plug 

because the sound wants gush my wooly branlot, and that is fine but

i am vulnerable 

and soft as i am strong

and by gods, i am such a strong little me]`,
  chapter5: `Avarice In The Name Of Charitable Acts

[O, Herculean boon

can you lift me like I try lift you,

but with the dogged glam 

that accompanies all impossibility?



i would like to be a feeble thing in your spurred hands 

for though effective i long to be for the sake of all who walk and cry upon the streets and articles of the fleshes’ blood 

in my promise is a quiet hope i could be small again, just in your arms as you rock me awake 



greed, the gullets that take me and my persons in

but we forgive them as all food must 



is the meat angry, that we chew upon?

or just sad and confused,

estranged in the pact of become the horror curio that sustains the mewing ambulate?



greed, the wandering touch that may just not know it gropes us like fabric though we are living music, we are song that when ate 

become a bit distorted, a bit hungry ourselves, not asleep but a third worse thing, by the maw of the caving ducts of chemical cure 



greed, the plumbing notion,

which wants to glue us to some molten force, and smelt us as sees fit 



greed, the swathe 

that mummifies our deed

and feeds upon idea that blooms from the  bubbling soma, all the parts too alien to us to deem a part of our own selfs 

and thus claimed by the watchful demons

that wish for greater hell



a long walk home, that is the alien way 

and little, green is the gait 

these members all walk 



greed, the gusty chalice, 

that spits a gift remains 

greed, the wheeled moan 

that pwns the thoughtful tame 

greed, the thing that grows 

for the sake of growing gills

not to save another

but to watch the drowning kill 



who shall we give it to? 

you say bury it, 

but the earth wants not our will 

not when it’s like this

not when it’s a film 

that, thick upon her mouth,

drowns her in our swill 

we must take it like a sword

and break it against the mill

the mill we built it with

in misunderstanding of our will]`,
  chapter6: `Animals Write

[the train, it smells of cumin and odor bodies

it is so sweet i could stay here forever

i remember being fear at the foot of mine humanity 

and made safe of my nostrils, scared to let 

the hormones in

i sip the loud laughs of the royal pedestrian

he is so open and alive with his enamor 

speaking of witchy teens and

shared media

he speaks of how he adores those

he brewed hate at as a child

for he sees they brought him reason 

with which to connect his kindred peer

to his own intellect and intuitions 



there are snakes that sip at my feet

as i glide through this body metallic 

it brings me to a place i know as home

it brings me to my seat



many’s eyes scroll against the luminous ,

the tabula raza that with a million acts 

is an agent unto itself



we are sip and we are sacred,

both the quiet and the boist,

us sterling, unsterile and sleeping weights 



we glide not unlike the deer who dip 

between, below the forested keep

there are magnets that host a gaseous hand

they wand for grab, to grab at us passers 



we glide not unlike the waters clear

that sweep of our minds and leave us dear

i often, at the wheel, find myself fumbling 

not from a lack of ability but at 

the very terror sheer

of how much i can command 



do you too, you feel the weight?

the sterling drop of the powers’ gland 

which asserts you as it portion 

where through comes the sunless bleed

which must keep returning, burning through your vein? 



do you too feel the weight?

the weight of high and low command 

that stumbles at your feet;

for you have limbs that it cannot

for that is its nature, to be natureless,

it is death for it, for it to be life

and thus, while we are living—

do you feel the call to grasp at steers,

and guide the boat in the dead of night? 



do you too, feel the lung breaded

wetted with joyous feud,

gleeful for your fur to be apart of its impossible claws? 



do you too, feel the plane wait 

for your form to approach with your 

impossible shape?



i think it is a question,

but have we already consented?

is being here enough 

for it to not ask but claim

your powers as a part of its own?



sapphic earth, she is strong in dirt

strong because she is the eager one

eager to asses

the waters you collect

and the weight of all you have left behind



she is the weight of home,

the strength that some call bone

she is the weakest link

for in the soft is motherlode



it takes a while to let it in

but when you name it friend instead of sin

it blossoms as such and with it comes

the touch of hurt, the Holy One;



the hurt is the healing touch]`,
  chapter7: `One Million Joints

[Nude, the lamp of muddy God;



who needs shade when the light is gentle?

am not fission for compliment, yet 

i can compile

our mood in one remark

and yet that remark is moot 



my dewlaps, 

throaty lapse of all unspoken—

in thy monk adjust the rest, 

you bleeding mod, so hewn by little teeth 



my aisles prosperous, with no playing God,

no anointed eulogous mass 



am mute but still loud, 

and the way is prepared by all that my silence can shatter at will 

and the hour’s angeles,

they all leapt into the weeping womb of earth 



my babe, my brawn-soaked legends…

your arm’s length is an arm too far away…

yet i want my net wider, 

wider than the snow 



and yet again, in this cold that i reap,

my innersneak amendments, 

they lie molten g’ainst my warmer banks



for union is beyond perfect, for that

is what makes it whole…



my subtlest mind, still aleap at the surrogate, the swarming renewal of time,

and clemency of and for my nada-counsel,

my consummate consulate of quiet thought……………………………..



O, to sleep & wake at the viewpoint

where stares lovers with fleeting wish

to be above the city magnetic



O, to cast an Ode in the empty fortress

and, with bellows, taunt the ranted empty with flashing word



Om, to the madness, the sweeping how,

where fasten has it, stags all brooding 

on my wrists…



My peer is more apparent

in the glee of horror’s lull

than the pressy zap of bliss…



there we are like soldiers 

on the edge of our battlements 

with no commanders left to point

and only us left there to kiss



i touched electric to another’s haunt,

and the power made it sigh, made it soft,

made it launch 



can i ask blue god for customer service?

even when sad, will the beacon resurface?

even in blood, shall my will be untouched?

will i arrive in the bleak

and leave still as such?



hipper than a poem, the stare my rifle toss

it looks with certain purpose

it aims from my regard 

and alabaster quotient,

all reduced to scents and skills

can it show me how to love

or merely train to kill?



make for me, no arrangement

in the body metallic’s gloss 

i need not be permanent 

for permanence is the game

of the losers whom all seek

and the winners all have lost…



i need no golden dinner

no serpent spell my heart 

no wine from gilly waters

for the waters are enough



i need not willing force

for the force has willed me here

i need not even duty

for the doing shall appear

by the stroke of my certain hands

commanded by thoughtless heart



my force is what is willing 

my force, the end shall start 



my blood is the drink of gods

my gods are the drink of men

my men are the puppet’s puppets

all strung by the goddess whim



so when i sing the body metallic

you shall know my deed accosts 

for it speaks to thee and all who lean

toward the note of the ones we lost



my tune is proper pen 

my song is ghoul and rot

my pen is oldest friend 

my name is loss exhaust 



tire ye, the manifold?

the carried and forgot?

the ones we shelter in our dreams,

the ones we let be lost?



tire ye, the common ground?

the flat we all can fall

upon when we have lost our dream 

when we become the small?



the bricks of man are the sands of god

every labor collected tall

yet in the eyes of large, we are not

and forever the waters fall…



the ballad of body metallic]`,
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