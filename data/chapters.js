// data/chapters.js

const chapters = {
  chapter1: {
    title: "The Points Most Affected By The User",
    content: `[Replace with full text of Chapter 1]`,
    prev: null,
    next: "/chapters/chapter2",
  },
  chapter2: {
    title: "To Lack Deathlessness",
    content: `[Replace with full text of Chapter 2]`,
    prev: "/chapters/chapter1",
    next: "/chapters/chapter3",
  },
  chapter3: {
    title: "Listen To The Scars, They Tell You Why",
    content: `[Replace with full text of Chapter 3]`,
    prev: "/chapters/chapter2",
    next: "/chapters/chapter4",
  },
  chapter4: {
    title: "Location, Vocation, Cave Action",
    content: `[Replace with full text of Chapter 4]`,
    prev: "/chapters/chapter3",
    next: "/chapters/chapter5",
  },
  chapter5: {
    title: "Avarice In The Name Of Charitable Acts",
    content: `[Replace with full text of Chapter 5]`,
    prev: "/chapters/chapter4",
    next: "/chapters/chapter6",
  },
  chapter6: {
    title: "Animals Write",
    content: `[Replace with full text of Chapter 6]`,
    prev: "/chapters/chapter5",
    next: "/chapters/chapter7",
  },
  chapter7: {
    title: "One Million Joints",
    content: `[Replace with full text of Chapter 7]`,
    prev: "/chapters/chapter6",
    next: null,
  },
};

export default chapters;