// Given two strings write a function to determine if the second string is an anagram of the first,
// An anagram is a word , phrase or name formed by rearranging the letters of another such as cinema formed from iceman

function validAnagram(first, second) {
  // if the length is not matching immediately return false
  if (first.length !== second.length) {
    return false;
  }

  // empty object that will take the letters form first string and count the number of appearance
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    letter.toLowerCase();
    // if the letter exists in lookup increment by 1 if not set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    letter.toLowerCase();
    // if can't find letter or letter is 0 then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}


//console.log(validAnagram('anagram','nagaram'));