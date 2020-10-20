import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { deleteItem, id, markItemComplete, status, task } = this.props;
    const itemClass =
      "isItemCompleted-" + (status ? "done" : "undone");
    return (
      <div className="container-fluid">
        <div className="item">
          <input type="checkbox" onChange={() => markItemComplete(id)} />
          <span className={itemClass}> {task} </span>
          <button
            style={{ float: "right", marginTop: "-4px" }}
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => deleteItem(id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
