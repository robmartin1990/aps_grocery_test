import React, { Component } from 'react'
import GroceryItem from "./GroceryItem/GroceryItem"

class List extends Component {

    moveItem = (item) => {
        this.props.moveItem(item)
    }

    render () {

    let groceryList = this.props.items.map(itm => {
        return <GroceryItem moveItem={this.moveItem.bind(this)} key={itm} name={itm}/>
    }); 
        

        return(
            <div> 
                <h1>{this.props.listname}</h1>
                <hr/>
                <ul>
                    {groceryList}
                </ul>
            </div>
        )
    }
}

export default List