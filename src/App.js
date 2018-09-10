import React, { Component } from "react"
import List from "./components/List/List"
import AddItem from './components/List/AddItem'

class App extends Component {
    constructor () {
        super()

        this.state = {
            cart: [
                "name"],
            needtobuy: []
        }
    }

    addNeedToBuyItem = (item) => {
        if(this.state.needtobuy.includes(item) || this.state.cart.includes(item)){
            alert("We already have this item.")
        } else {
            let needtobuy = [...this.state.needtobuy]
            needtobuy.push(item)
            this.setState({needtobuy})
        }
    }

    handleMove = (item) => {
        if(this.state.cart.includes(item)){
            let needtobuy = [...this.state.needtobuy]
            needtobuy.push(item)

            let cart = this.state.cart.filter(itm => itm !== item)

            this.setState({needtobuy, cart})

        } else {
            let cart = [...this.state.cart] 
            let needtobuy = this.state.needtobuy.filter(itm => itm !== item)

            cart.push(item)

            this.setState({cart, needtobuy})
        }
    }


  render() {
    return (
        <div>
            <AddItem addItem={this.addNeedToBuyItem}/>
            <List moveItem={this.handleMove} listname="Need To Buy" items={this.state.needtobuy} />
            <List moveItem={this.handleMove} listname="Cart" items={this.state.cart}/>
        </div>

    );
  }
}

export default App;

