import React, { Component } from 'react'

class Demo2Child extends Component {
    constructor(props) {    
        super(props);  
        console.log('子组件Demo2Child初次渲染调用constructor，该函数会在初始化和 `update` 时被调用，并接收到父组件传来的props',props)         
        this.state = {       

        };    
    } 
    static getDerivedStateFromProps(nextProps, nextState){
        console.log("子组件Demo2Child,判断是否需要更新组件，多用于组件性能优化",nextProps)
        return nextProps.arr !==nextState.arr
    }
    demoClick(product){
        let arr=this.props.arr
        arr=arr.filter(
            (item) =>{
                return item.product !== product
            }
        )
        console.log('子组件触发事件，改变了arr，并通过函数props.getData将改变的arr传回父组件，重新渲染',arr)
        this.setState({
            arr:arr
        })
        this.props.getData(arr)
    }
    render(){
        return(
            <div>
                <button onClick={this.demoClick.bind(this,'bread 700g')}>点我删除</button>
            </div>
        )
    }
}
export default Demo2Child