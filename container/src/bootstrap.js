import { mount as cartMount } from 'cart/CartShow'
import { mount } from 'products/ProductsIndex'

console.log('container!!')

mount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))