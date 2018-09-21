import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart,updateCart ,deleteFromCart } from '../../actions'
import store from '../../store'

class Demo1 extends Component {
    // addClick(name,num,spe){
    //     store.dispatch(addToCart(name,num,spe))
    // }
    render() {
        const {text,addToCart,deleteFromCart,updateCart} = this.props
        return (
            <div>
                <button onClick={addToCart.bind(this,'Coffee 500gm', 1, 250)}>点我增加</button>
                <button onClick={deleteFromCart.bind(this,'Coffee 500gm')}>点我删除</button>
                <button onClick={updateCart.bind(this,'Coffee 500gm', 5, 110)}>点我修改</button>
                demo1
                {text?
                    <div>
                    {text.map((a,i)=>{
                        const list=(
                            <div key={i}>
                                <span style={{ marginLeft: 100 }}>{a.product}</span>
                                <span style={{ marginLeft: 100 }}>{a.quantity}</span>
                                <span style={{ marginLeft: 100 }}>{a.unitCost}</span>
                            </div>
                        )
                        return(
                            list
                        )
                    })                    
                    }
                    </div> 
                :null
                }
            </div>           
        )
    }
}
const mapStateToProps = (state) => {
    console.log("allState",state)
    return {text: state.demo2.cart}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToCart: addToCart,
    updateCart:updateCart,
    deleteFromCart:deleteFromCart
  }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo1) ;