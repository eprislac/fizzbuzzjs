const fizzbuzz = require('./fizzbuzz')
const range = new Array(100)
const rootEl = document.createElement('ol')

range.forEach((item, index) => {
  listItem = document.createElement('li')
  listItem.innerHTML = `${fizzbuzz(index + 1)}`
  rootEl.append(listItem)
})

document.append(rootEl)
