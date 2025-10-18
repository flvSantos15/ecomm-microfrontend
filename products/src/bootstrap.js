import faker from 'faker'

const mount = (el) => {
  let produtos = ''

  for (let index = 0; index < 3; index++) {
    const name = faker.commerce.productName()
    produtos += `<div>${name}</div>`
  }

  el.innerHTML = produtos
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products')

  if (el) {
    mount(el)
  }
}

export { mount }
