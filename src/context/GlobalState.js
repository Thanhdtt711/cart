import React, { Component } from 'react'

export const GlobalContext = React.createContext();

export class GlobalState extends Component {

  constructor(props){
    super(props);
    this.api = 'http://localhost:3004/product';
    this.state = {
        cart: [],
        display: []
    }

  }  

  goiApi = ()=>{
    fetch(this.api)
    .then((response) => response.json())
    .then((data) => 
      this.setState({
        cart: data,
      })
    );
  }
  componentDidMount() {
    this.goiApi()
  }
  changeAction = (action) => {
        this.setState({
            action: action
        }) 
  }

  updateCart = (display) => {
    this.setState({
      display: display
    })
  }
  updateDelete = (deleteid) => {
    console.log(this.state.display)
    this.setState({
      display: deleteid
    })
  }
  updateDeleteAll = () => {
    this.setState({
      display: []
    })
  }
  render() {
    const {children} = this.props;

    return (
        <GlobalContext.Provider value={
            {
                state: this.state,
                action: this.changeAction,
                updateCart: this.updateCart,
                updateDelete: this.updateDelete,
                updateDeleteAll: this.updateDeleteAll,
                goiApi: this.goiApi
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
  }
}

export default GlobalState