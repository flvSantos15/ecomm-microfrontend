import faker from 'faker'

let produtos = ''

for (let index = 0; index < 3; index++) {
  const name = faker.commerce.productName()
  produtos += `<div>${name}</div>`
}

document.querySelector('#dev-products').innerHTML = produtos
