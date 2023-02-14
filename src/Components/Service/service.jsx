import React, { Component } from "react";
class Service extends Component {
  state = {
    count: this.props.counter.value,
  };

  render() {
    return (
      <div className="container">
        <button
          onClick={() => this.props.OnDelete(this.props.counter.id)}
          className="btn btn-lg btn-danger"
        >
          Delete
        </button>
        <button onClick={this.Reset} className="btn btn-lg btn-secondary">
          Reset
        </button>
        <button id="counter" className={this.ClassChanger()}>
          {this.state.count}
        </button>
        <button
          onClick={this.IncreasHandler}
          className="btn btn-lg btn-primary"
        >
          Increase
        </button>
        <button
          onClick={this.DecreasHandler}
          className="btn btn-lg btn-warning"
        >
          Decrease
        </button>
      </div>
    );
  }

  IncreasHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  DecreasHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };
  Reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  ClassChanger() {
    let classes = "btn btn-sm btn-";
    classes += this.state.count === 0 ? "warning" : "secondary";
    return classes;
  }
}

export default Service;
