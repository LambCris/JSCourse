//1

function palindrome(str) {
  const newStr = str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replace(/[^\w\s]|_/g, "");

  return newStr === str.replace(/[^\w\s]|_/g, "");
}
console.log(palindrome("tenet."));

// 2
function longestWord(str) {
  const arr = str.split(" ");
  const longestWord = "";

  for (word of arr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("Web Development Tutorial"));

//3 вывести в алфавитном порядке

function sortString(str) {
  const result = str.split("").sort().join("");
  console.log(result);
  return result;
}

console.log(sortString("lacitebbah"));

//4  первый неповторяющийся символ

function findIndex(str) {
  for (let i = 0; i <= str.length; i++) {
    const char = str[i]; // символы

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex("фывфавыапрс"));

//5  вывести все гласные

function countVowels(str) {
  const sortedStr = str.match(/[aeiou]/gi).join("").length - 1;
  return sortedStr;
}
console.log(countVowels("Web Development Tutorial"));
