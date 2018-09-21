import React, { Component } from 'react'


class Demo2Show extends Component {
    constructor(props) {    
        super(props);  
        console.log('子组件Demo2Show初次渲染调用constructor，该函数会在初始化和 `update` 时被调用，并接收到父组件传来的props',props)
        this.state = {       
            obj:props.obj
        };  
    } 
    static getDerivedStateFromProps(nextProps, nextState){
        console.log("子组件Demo2Show,判断是否需要更新组件，多用于组件性能优化",nextProps)
        return nextProps.obj !==nextState.obj
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('子组件shouldComponentUpdate:','react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候')
        return nextProps.obj !== nextState.obj;
    }
    render(){
        let {obj}=this.state
        return(
            <div>
                <span style={{ marginLeft: 100 }}>{obj.product}</span>
                <span style={{ marginLeft: 100 }}>{obj.quantity}</span>
                <span style={{ marginLeft: 100 }}>{obj.unitCost}</span>
            </div>
        )
    }
}
export default Demo2Show