const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

/**
 * Returns true only if given word begins with a vowel.
 *
 * @param word the word to check
 */
function beginsWithVowel(word: string) {
  return vowels.includes(word.charAt(0).toLowerCase());
}

export { beginsWithVowel };
