'use strict';

// input a word
// check if a letter is a vowel using a for loop
// store index of first vowel
// removing everything in the indexes < the vowel
// append removed string to the end of the string
// additionally append 'ay' to the end of the string
// edge cases*
// words with no vowel just gets 'yay' appended

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  word = word.toLowerCase().trim();
  const vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
  let storeIndex = 0;

  passed test in 24ms
  
  for (let i=0; i<word.length; i++) {
    for (let j=0; j<vowel.length; j++) {
      if( word[i] === vowel[j]){
        storeIndex = i;
        const str1 = word.slice(0,storeIndex);
        const str2 = word.slice(storeIndex);
        if(storeIndex === 0){
          return str2 + str1 + 'yay';
        }
        return str2 + str1 + 'ay';
      }
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      if (i === 0) {
        return word + 'yay';
      }
      const str1 = word.slice(0, i);
      const str2 = word.slice(i);
      return str2 + str1 + 'ay';
    }
  }

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
