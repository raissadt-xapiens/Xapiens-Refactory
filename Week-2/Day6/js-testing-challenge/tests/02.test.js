const { test, expect } = require('@jest/globals');
const sum = require('../src/02');

test('adds 4 + 6 to equal 10', () => {
    expect(sum(4, 6)).toBe(10);
});