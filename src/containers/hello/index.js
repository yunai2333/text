import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateDemoText } from '../../actions'
import styles from './style.css'

class HelloContainer extends Component {
  render() {
    console.log('Store作为唯一的state树，管理所有组件的state，在Redux项目中，\
    利用Container容器组件作为桥梁，将React组件和Redux管理的数据流联系起来。\
    Container通过connect函数将Redux的state和action转化成展示组件即React组件所需的Props。'
    ,this.props)
    const {updateDemoText, text} = this.props
    return (
      <div>
        <p>Hello, <span className={styles.hero}>{text}</span></p>
        <button onClick={updateDemoText.bind(this, 'You')}>Hi !</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('从Store中获取要使用的state',state)
  return {text: state.demo3}
}
  
// dispatch是调用action的唯一方法
// 简要介绍：Redux中的bindActionCreators，是通过dispatch将action包裹起来，
// 这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）。
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateDemoText: updateDemoText
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloContainer)
