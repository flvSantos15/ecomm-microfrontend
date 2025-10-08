import faker from 'faker'

let produtos = ''

for (let index = 0; index < array.length; index++) {
  const name = faker.commerce.productName()
  produtos += `<div>${name}</div>`
}

console.log(produtos)
