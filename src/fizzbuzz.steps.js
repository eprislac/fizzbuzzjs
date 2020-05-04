const { defineFeature, loadFeature } = require('jest-cucumber')
const fizzbuzz = require('./fizzbuzz')

const feature = loadFeature('./src/fizzbuzz.feature')

beforeEach(() => { let result = null })



defineFeature(feature, test => {

  const whenIPass = (when) => {
    when(/I pass (\d+)/, whenVal => {
      result = fizzbuzz(parseInt(whenVal))
    })
  }

  const thenItReturns = (then, thenVal) => {
    then(/^it returns \'(Fizz|Buzz|FizzBuzz|)\'$/, res => {
      expect(res).toBe(thenVal)
    })
  }

  test(`Passing 3 yields 'Fizz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Fizz')
  })

  test(`Passing 6 yields 'Fizz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Fizz')
  })

  test(`Passing 9 yields 'Fizz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Fizz')
  })

  test(`Passing 12 yields 'Fizz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Fizz')
  })

  test(`Passing 99 yields 'Fizz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Fizz')
  })

  test(`Passing 5 yields 'Buzz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Buzz')
  })

  test(`Passing 10 yields 'Buzz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Buzz')
  })

  test(`Passing 100 yields 'Buzz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'Buzz')
  })

  test(`Passing 15 yields 'FizzBuzz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'FizzBuzz')
  })

  test(`Passing 30 yields 'FizzBuzz'`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, 'FizzBuzz')
  })

  test(`Passing 1 yields ''`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, '')
  })

  test(`Passing 2 yields ''`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, '')
  })

  test(`Passing 443 yields ''`, ({when, then}) => {
    whenIPass(when)
    thenItReturns(then, '')
  })
})

