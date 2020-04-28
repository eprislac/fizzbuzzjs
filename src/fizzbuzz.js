const fizzbuzz =
  num => `${ num % 3 === 0 ? 'Fizz' : '' }${ num % 5 === 0 ? 'Buzz' : '' }`

module.exports = fizzbuzz
