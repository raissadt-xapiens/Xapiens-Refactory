const { test, expect } = require('@jest/globals');
const isPrime = require('../src/05');

test('number 8 is not a prime number', () => {
    expect(isPrime(8)).toBe(false);
})