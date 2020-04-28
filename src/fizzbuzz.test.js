const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('should output the proper value', () => {
    expect(fizzbuzz(1)).toBe('')
    expect(fizzbuzz(2)).toBe('')
    expect(fizzbuzz(3)).toBe('Fizz')
    expect(fizzbuzz(5)).toBe('Buzz')
    expect(fizzbuzz(15)).toBe('FizzBuzz')
    expect(fizzbuzz(30)).toBe('FizzBuzz')
    expect(fizzbuzz(45)).toBe('FizzBuzz')
  })
})
