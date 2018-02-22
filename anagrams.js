/*
* Two words are anagrams of each other if they both contain the same letters even in different order.
*
* anagrams function takes as argument a string (word) and and array of strings (words)
* and returns all the word's anagrams found in the array words.
* */

function anagrams(word, wordsArray) {
    let newWord = word.split('').sort().join('');
    return wordsArray.filter(item => item.split('').sort().join('') === newWord );
}

console.log( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) );
