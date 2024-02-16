//1

function multiply(n) {
  if (typeof n === "number" && n > 0) {
    for (let i = 1; i <= n; i++) {
      let result = "";
      for (let j = 1; j <= n; j++) {
        result += i * j + " ";
      }
      console.log(result);
    }
  } else {
    console.log("error");
    return;
  }
}
console.log(multiply(5));

//2

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
   const result = n * calculateFactorial(n - 1);
    return result;
  }
}

console.log(calculateFactorial(5));

//3

function addWithLoss(a, b, base = 1) {
  const result = a + b;
  return +result.toFixed(base);
}

console.log(addWithLoss(1.001, 2.002));

//4

function processText(str) {
  const res = str.trim().toLowerCase().replaceAll("a", "X");
  console.log(res);
  return res;
}

console.log(processText("Another Example"));

//5

// //5

function encode_string(s, key) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let charsFromString = s.charCodeAt(i);
    let encodedString = charsFromString + key;
    result += String.fromCharCode(encodedString);
  }
  return result;
}

/*----------------------*/

function decode_string(encodedStr, key) {
  let result = "";

  for (let i = 0; i < encodedStr.length; i++) {
    let charsFromString = encodedStr.charCodeAt(i);
    result += String.fromCharCode(charsFromString - key);
  }
  return result;
}

const key = 5;
const encoded = encode_string("Hello, World!", key);
const decoded = decode_string(encoded, key);

console.log(encoded, decoded);
