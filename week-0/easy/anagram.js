/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // 1. Dono strings ko lowercase karke unke saare spaces hatao
    const cleanStr1 = str1.toLowerCase().replace(/\s+/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s+/g, '');

    // 2. Agar length barabar nahi hai, to anagram nahi ho sakta
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // 3. Characters ko split karo, sort karo, aur wapas join karke compare karo
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
