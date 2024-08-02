import { MockMovieListInterface } from "@/interfaces/MockMoviContent";

function getRandomImage(width, height, index) {
  return `https://loremflickr.com/${width}/${height}?random=${index}`;
}

function getRandomPhrase() {
  const phrases = [
    "Une aventure époustouflante.",
    "Un voyage inoubliable.",
    "Une histoire captivante.",
    "Un drame émouvant.",
    "Un thriller palpitant.",
    "Une comédie hilarante.",
    "Un mystère intrigant.",
    "Une quête épique.",
    "Un récit inspirant.",
    "Une odyssée spectaculaire.",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function getRandomDescription() {
  const sentences = [
    "Découvrez l'histoire fascinante de ce film.",
    "Plongez dans un monde de mystères et de découvertes.",
    "Un film qui vous tiendra en haleine du début à la fin.",
    "Une expérience cinématographique unique en son genre.",
    "Préparez-vous à être transporté dans une autre dimension.",
  ];
  let description = "";
  const sentenceCount = Math.floor(Math.random() * 2) + 2; // 2 to 3 sentences
  for (let i = 0; i < sentenceCount; i++) {
    description +=
      sentences[Math.floor(Math.random() * sentences.length)] + " ";
  }
  return description.trim();
}

const DATA: MockMovieListInterface = Array.from({ length: 15 }, (_, index) => ({
  id: `item-${index + 1}`,
  title: `Item ${index + 1}`,
  url: `http://192.168.0.195/file-storage/video-1/video-1.mp4`,
  posterUrl: getRandomImage(300, 533, index + 1),
  vignetteUrl: getRandomImage(1617, 702, index + 1),
  isStereoscopic: Math.random() < 0.5,
  synopsis: getRandomPhrase(),
  description: getRandomDescription(),
}));

export default DATA;
