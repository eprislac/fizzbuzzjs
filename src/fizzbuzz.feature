Feature: FizzBuzz

  Scenario: Passing 3 yields 'Fizz'
    When I pass 3
    Then it returns 'Fizz'

  Scenario: Passing 6 yields 'Fizz'
    When I pass 6
    Then it returns 'Fizz'

  Scenario: Passing 9 yields 'Fizz'
    When I pass 9
    Then it returns 'Fizz'

  Scenario: Passing 12 yields 'Fizz'
    When I pass 12
    Then it returns 'Fizz'

  Scenario: Passing 99 yields 'Fizz'
    When I pass 99
    Then it returns 'Fizz'

  Scenario: Passing 5 yields 'Buzz'
    When I pass 5
    Then it returns 'Buzz'

  Scenario: Passing 10 yields 'Buzz'
    When I pass 10
    Then it returns 'Buzz'

  Scenario: Passing 100 yields 'Buzz'
    When I pass 100
    Then it returns 'Buzz'

  Scenario: Passing 15 yields 'FizzBuzz'
    When I pass 15
    Then it returns 'FizzBuzz'

  Scenario: Passing 30 yields 'FizzBuzz'
    When I pass 30
    Then it returns 'FizzBuzz'

  Scenario: Passing 45 yields 'FizzBuzz'
    When I pass 45
    Then it returns 'FizzBuzz'

  Scenario: Passing 1 yields ''
    When I pass 1
    Then it returns ''

  Scenario: Passing 2 yields ''
    When I pass 2
    Then it returns ''

  Scenario: Passing 443 yields ''
    When I pass 443
    Then it returns ''


