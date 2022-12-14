import React, { Component } from 'react'
import { GlobalContext } from '../context/GlobalState'

export class Header extends Component {
  render() {
    return (
        <GlobalContext.Consumer>
            {
                (data) => <h1>Header Sản phẩm: {data.state.cart.length}</h1>
            }
        </GlobalContext.Consumer>
    )   
  }
}

export default Header