const { test, expect } = require('@jest/globals');
const mebiToKibi = require('../src/03');

test('convert 1024 kibibyte to 1 mebibyte', () => {
    expect(mebiToKibi(1024)).toBe(1);
});