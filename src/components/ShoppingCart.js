import React, { Component } from 'react'
import { GlobalContext } from '../context/GlobalState'

export class ShoppingCart extends Component {

  addCartHandle = (data, item) => {
    data.state.display.push(item);
    console.log(data.state.display)
    data.updateCart(data.state.display);
  }
  delete = (data, id) => {
    const dataid = data.state.display.filter(i => {
      if (i.id === id) {
        return false
      }
      return true
    })
    data.updateCart(dataid)
  }
  deleteAll = (data) => {
    data.updateDeleteAll()
  }
  render() {
    let count = 0;
    return (
      <>
        <h2>Giỏ hàng</h2>
        <GlobalContext.Consumer>
          {
            data =>
              <>
                <div className="cart-item">
                  {
                    data.state.cart.map((item) => {
                      if (item.id === item.id) {

                      }
                      return (
                        <div className="card" key={item.id}>
                          <img src={item.img} alt={item.name} style={{
                            width: '100%', height: '200px',
                            objectFit: 'cover'
                          }} />
                          <h1>{item.name}</h1>
                          <p className="price">${item.price}</p>
                          <p>{item.description}</p>
                          <p><button onClick={() => {
                            this.addCartHandle(data, item);
                          }}>
                            Thêm vào giỏ
                          </button></p>
                        </div>
                      )
                    })
                  }
                </div>
                <hr />
                <h1>Giỏ hàng {data.state.display.length}</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Giá tiền</th>
                      <th>Mô tả</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.state.display.length === 0
                        ?
                        <tr>
                          <td colSpan="4">Trống</td>
                        </tr>
                        :
                        data.state.display.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td>
                                {item.description}
                              </td>
                              <td>
                                <button 
                                onClick={() => {
                                  this.up(data,item)
                                }}
                                >+</button>
                                <button >-</button>
                              </td>
                              <td>
                                <button
                                  onClick={() => {
                                    this.delete(data, item.id)
                                  }}
                                >Xóa</button>
                              </td>
                            </tr>
                          )
                        })
                    }
                    {
                      data.state.display.length === 0 ? '' :
                        <tr>
                          <td colSpan="4">
                            <button onClick={() => {
                              this.deleteAll(data)
                            }}>
                              xóa tất cả</button>
                          </td>
                        </tr>
                    }
                  </tbody>
                </table>
              </>
          }
        </GlobalContext.Consumer>
      </>
    )
  }
}

export default ShoppingCart