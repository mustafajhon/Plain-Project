import "./home.css";
import React, { Component } from "react";
import Service from "../Service/service";
class Home extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.counters.map((counter) => (
          <Service
            key={counter.id}
            counter={counter}
            value={counter.value}
            OnDelete={this.DeleteHandler}
          />
        ))}
      </div>
    );
  }
  DeleteHandler = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default Home;
