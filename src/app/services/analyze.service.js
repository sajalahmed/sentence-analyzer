const countWords = (text) => {
  try {
    if (!text) return 0;
    const words = text.split(' ').filter(word => word.trim() !== '');
    return words.length;
  } catch (err) {
    return '';
  }
};

const countCharacters = (text) => {
  if (!text) return 0;
  const characters = text.split('').filter(char => char.trim() !== '');
  return characters.length;
};

const countSentences = (text) => {
  if (!text) return 0;
  let sentenceCount = 0;
  const sentences = text.split('');
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i] === '.' || sentences[i] === '!' || sentences[i] === '?') {
      sentenceCount++;
    }
  }
  return sentenceCount;
};

const countParagraphs = (text) => {
  if (!text) return 0;
  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
  return paragraphs.length;
};

const findLongestWord = (text) => {
  if (!text) return '';
  const words = text.split(' ').filter(word => word.trim() !== '');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

module.exports = {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  findLongestWord,
};
