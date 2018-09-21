import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import demoReducer from './demo'

const allReducers = {
  demo1: productsReducer,
  demo2: cartReducer,
  demo3: demoReducer
}
console.log('Store作为唯一的state树，管理所有组件的state。')
const rootReducer = combineReducers(allReducers);
// combineReducers 函数总的来说很简单，总结来说就是接收一个对象，将参数过滤
// 后返回一个函数。该函数里有一个过滤参数后的对象 finalReducers，遍历该对象，然
// 后执行对象中的每一个 reducer 函数，最后将新的 state 返回。

export default rootReducer;