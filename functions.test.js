import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './functions.js';

it('capitalizeTest', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('reverseStringTest', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});

it('calculatorTest', () => {
  expect(calculator.add(4, 2)).toBe(6);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.multiply(4, 2)).toBe(8);
  expect(calculator.divide(4, 2)).toBe(2);
});

it('caesarCipherTest', () => {
  expect(caesarCipher('abcd', 1)).toBe('bcde');
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  expect(caesarCipher('attack at dawn', 45)).toBe('tmmtvd tm wtpg');
});

it('analyzeArray', () => {
  expect(
    analyzeArray([1, 8, 3, 4, 2, 6]) ===
      {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      }
  );
});
