import { UPDATE_DEMO_TEXT } from '../actions'

const Stringstate='World'

function demoReducer (state =Stringstate , action) {
  console.log('通过Reducers根据不同的Action.type来更新不同的state，Reducer一般是一个纯函数，所谓的纯函数简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。')
  switch (action.type) {
    case UPDATE_DEMO_TEXT:
      return action.payload

    default:
      return state

  }
}

export default demoReducer
