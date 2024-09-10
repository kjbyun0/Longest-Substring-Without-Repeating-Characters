// function lengthOfLongestSubstring(s) {
//   // type your code here
//   let maxLen = 0, len = 0;
//   let i = 0, j = 0;
//   const chSet = new Set();
  
//   while (j < s.length) {
//     if (i < j) {
//       if (chSet.has(s[j])) {
//         chSet.delete(s[i++]);
//         maxLen = Math.max(maxLen, len);
//         len--;
//       } else {
//         chSet.add(s[j++]);
//         len++;
//       }
//     } else {
//       chSet.add(s[j++]);
//       len++;
//     }
//   }

//   return Math.max(maxLen, len);
// }

function lengthOfLongestSubstring(s) {
  const map = {};
  let start = 0;
  let maxLen = 0;
  
  for (let end = 0; end < s.length; end++) {
    // if s[eIdx] is in the map
    const prevIdx = map[s[end]];
    if (prevIdx !== undefined) {
      start = prevIdx + 1;
    } else {
      // console.log('start: ', start, ', end: ', end, ', substring: ', s.slice(start, end+1));
      maxLen = Math.max(maxLen, end - start + 1);
    }
    map[s[end]] = end;
  }
  return maxLen;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", lengthOfLongestSubstring("abcabcbb"));
  
  console.log("Expecting: 0");
  console.log("=>", lengthOfLongestSubstring(""));

  console.log("Expecting: 3");
  console.log("=>", lengthOfLongestSubstring("abc"));

  console.log("Expecting: 3");
  console.log("=>", lengthOfLongestSubstring("abcb"));

  console.log("Expecting: 4");
  console.log("=>", lengthOfLongestSubstring("abcaeed"));
}

module.exports = lengthOfLongestSubstring

// Please add your pseudocode to this file
// And a written explanation of your solution