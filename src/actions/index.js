export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}

export const UPDATE_DEMO_TEXT = 'UPDATE_DEMO_TEXT'

export function updateDemoText (text) {
  console.log('组件所有的行为通过Actions来触发，点击了按钮，触发了Action')
  return {
    type: UPDATE_DEMO_TEXT,
    payload: text
  }
}
