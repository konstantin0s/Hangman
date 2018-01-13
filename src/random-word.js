import words from './words';

export default () => {
  const wordIndex = Math.floor(Math.random() * words.length);

  return words[wordIndex];
}
