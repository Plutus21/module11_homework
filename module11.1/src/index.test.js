const getMonth = require('./index')

describe('test for getMonth function', () => {
   it ('should operate correctly with month number', () => {
       expect(getMonth(10)).toBe('октябрь')
   }),
   it ('should operate incorrectly month number < 1', () => {
       expect(getMonth(0)).toBe('введите число больше 1')
   }),
   it ('should operate incorrectly month number > 12', () => {
       expect(getMonth(13)).toBe('введите число меньше 12')
   })
});