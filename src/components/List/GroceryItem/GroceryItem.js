import React from 'react';

const groceryItem = props => {

    return(
    <li>
        {props.name} 
        <a href="#" onClick={props.moveItem.bind(this, props.name)}
          >
            +
        </a>
    </li>
    );
}

export default groceryItem;