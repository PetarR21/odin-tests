export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string
    .split('')
    .reverse()
    .reduce((total, current) => total + current, '');
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export function caesarCipher(string, shift) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === ' ') {
      newString += string.charAt(i);
      continue;
    }

    let charCode = string.charCodeAt(i);
    let low = string.charAt(i) === string.charAt(i).toUpperCase() ? 65 : 97;
    let high = low === 65 ? 90 : 122;

    charCode += shift % 26;

    if (charCode > high) {
      charCode = low + (charCode - high - 1);
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

export function analyzeArray(arr) {
  let obj = {
    average: arr.reduce((total, current) => total + current, 0) / arr.length,
    min: arr.reduce((min, current) => (min < current ? min : current), arr[0]),
    max: arr.reduce((max, current) => (max > current ? max : current), arr[0]),
    length: arr.length,
  };

  return obj;
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
