const { test, expect } = require('@jest/globals');
const charLength = require('../src/01');

test('return length of input', () => {
    expect(charLength('raissa')).toBe(6);
});