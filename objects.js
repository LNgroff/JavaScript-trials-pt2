"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCount = {};

  for (const word of phrase.split(' ')) {
    if (wordCount[word]) {wordCount[word] += 1; } 
    else { wordCount[word] = 1; }
  }
  return wordCount;
};


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {

  const melonPrice = {
    2.50 : ['Honeydew', 'Cantaloupe'],
    2.95 : ['Watermelon'],
    3.25 : ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!melonPrice[price]) {
    return;
  }
  return melonPrice[price].sort();
  };


