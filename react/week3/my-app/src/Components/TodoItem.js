import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.onMarkItemComplete = (event) => {
      this.props.markItemComplete(this.props.id);
    };

    this.onDeleteItem = (event) => {
      this.props.deleteItem(this.props.id);
    };
  }
  render() {
    const itemClass =
      "isItemCompleted-" + (this.props.status ? "done" : "undone");

    return (
      <div className="container-fluid">
        <div className="item">
          <input type="checkbox" onChange={this.onMarkItemComplete} />
          <span className={itemClass}> {this.props.task} </span>
          <button
            style={{ float: "right", marginTop: "-4px" }}
            type="button"
            className="btn btn-danger btn-sm"
            onClick={this.onDeleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
