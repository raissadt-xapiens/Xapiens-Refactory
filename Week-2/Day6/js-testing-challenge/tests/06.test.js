const { test, expect } = require('@jest/globals');
const repeatString = require('../src/06');

test('the repeated text:', () => {
    expect(repeatString('Makan! ', 3)).toBe('Makan! Makan! Makan! ');
})