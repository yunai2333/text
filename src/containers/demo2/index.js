import React, { Component } from 'react'
import Demo2Child from './Demo2Child'
import Demo2Show from './Demo2Show'

class Demo2 extends Component {
    constructor(props) {    
        super(props);       
        this.state = {       
            arr:[],
            count:0
        };    
        console.log('父组件constructor:','用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用',this.state)
    }    

    componentWillUpdata(nextProps, nextState){
        console.log('父组件componentWillUpdata:','组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state')
    }

    componentDidUpdate(){
        console.log('父组件componentDidUpdate:',"组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。")
    }

    componentDidMount(){
        console.log("父组件componentDidMount","用于获得最新的 DOM 数据")
        this.setState({
            arr:[{
                    product: 'bread 700g',
                    quantity: 2,
                    unitCost: 90
                },
                {
                    product: 'milk 500ml',
                    quantity: 1,
                    unitCost: 47
                }] 
        })
        
    }

    componentWillUnmount(){
        console.log('父组件componentWillUnmount','组件将要卸载时调用，一些事件监听和定时器需要在此时清除。')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("父组件getSnapshotBeforeUpdate","组件即将销毁,可以在此处移除订阅，定时器等等")
        return prevProps !== prevState.value;
    }

    // componentWillMount(){
    //     console.log('componentWillMount:','不建议使用,组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。')
    // }
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps:','不建议使用,组件初始化时不调用，组件接受新的props时调用。')
    // }
    demoClick(){
        console.log('父组件触发事件，更新了state，使组件重新渲染')
        let arr=this.state.arr
        arr.push({
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        })
        this.setState({
            arr:arr
        })
    }
    getData(arr){
        console.log('父组件接受子组件传回的arr,更新了state，使组件重新渲染')
        this.setState({
            arr:arr
        })
    }
    handle() {
        // 第一，两次的打印都为 0，因为 setState 是个异步 API，只有同步代码运行完毕
        // 才会执行。setState 异步的原因我认为在于，setState 可能会导致 DOM 的重绘，如
        // 果调用一次就马上去进行重绘，那么调用多次就会造成不必要的性能损失。设计成异步
        // 的话，就可以将多次调用放入一个队列中，在恰当的时候统一进行更新过程。
        // 第二，虽然调用了三次 setState ，但是 count 的值还是为 1。因为多次调用会
        // 合并为一次，只有当更新结束后 state 才会改变
        console.log(this.state.count) // -> 初始化 `count` 为 0
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 1 })      
        console.log(this.state.count) // -> 0
    }
    // handle() {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
    //         console.log(this.state.count)
    //         this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
    //             console.log(this.state.count)
    //             this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
    //                 console.log(this.state.count)
    //             })
    //         })
    //     })
    // }
    render() {
        let arr=this.state.arr
        console.log('父组件render:','react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了')
        return (
            <div>
                <h1>react 父子组件数据传递及生命周期</h1>
                <button onClick={this.demoClick.bind(this)}>点我增加</button>
                <Demo2Child arr={this.state.arr} getData={this.getData.bind(this)}/>
                {arr&&arr.length?
                    <div>
                    {arr.map((obj,i)=>{
                        const list=<Demo2Show key={i} obj={obj}/>           
                        return(
                            list
                        )
                    })                    
                    }
                    </div> 
                :null
                }
                <button onClick={this.handle.bind(this)}>setState常见错误</button>
            </div>           
        )
    }
}

export default Demo2


