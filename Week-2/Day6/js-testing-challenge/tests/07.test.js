const { test, expect } = require('@jest/globals');
const repeatLetter = require('../src/07');

test('the repeated text:', () => {
    expect(repeatLetter('Hello World! ', 2)).toBe('HHeelllloo WWoorrlldd!! ');
})