import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if ( this.state.item === "") {
      alert("Fields cannot be empty.");
    } else {
        const item = this.state.item
        this.props.addItem(item);
        this.setState({item: ""})
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="page-header">Add Item</h3>
        <hr />
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Item</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.item}
              onChange={this.handleChange}
              placeholder="Enter item."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem