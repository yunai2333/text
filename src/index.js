// redux 数据流
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store.js';
// import HelloContainer from './containers/hello'
// // Provider 是 react-redux 库提供的，redux 本身并不强制依赖它，然而问题是 redux 本身也不依赖 react。
// // 作为一个纯粹的 data layer，redux 并不关心你用什么视图引擎，所以如何访问 store 是你自己需要考虑的事情，
// // redux 并不会约束你一定要怎么做。
// // react-redux 是官方提供的解决方案，Provider 本身并没有做很多事情，只是把 store放在 context 里罢了。
// // 实际上如果你用 react-redux，那么连接视图和数据层最好的办法是使用 connect 函数。本质上 Provider 就是给 connect 提供 store 用的。
// ReactDOM.render(
//   <Provider store={store}>
//     <HelloContainer />
//   </Provider>,
//   document.getElementById('root')
// );



// redux dome 增删改查
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store.js';
// import Demo1 from './containers/demo1'
// ReactDOM.render(
//   <Provider store={store}>
//     <Demo1 />
//   </Provider>,
//   document.getElementById('root')
// );



// react 父子组件数据传递及生命周期
import React from 'react'
import ReactDOM from 'react-dom'
import Demo2 from './containers/demo2'
console.log('react 在内存中生成维护一个跟真实DOM一样的虚拟DOM 树，在改动完组件后，\
会再生成一个新得DOM，react 会把新虚拟DOM 跟原虚拟DOM 进行比对，找出两个DOM 不同的地方diff ，\
然后把diff放到队列里面，然后批量更新diff 到真实DOM上。优点：最终真实DOM 就只更新了diff 部分，\
提高了渲染速度。缺点：首次渲染DOM 时候由于多了一层虚拟DOM 计算，就比html 渲染慢')
ReactDOM.render(
  <Demo2/>,
  document.getElementById('root')
);


