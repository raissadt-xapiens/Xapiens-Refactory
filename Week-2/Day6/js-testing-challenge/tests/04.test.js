const { boolean } = require('yargs');
const isLeapYear = require('../src/04');

test('year 2020 is a leap year', () => {
    expect(isLeapYear(2020)).toBe(true);
})