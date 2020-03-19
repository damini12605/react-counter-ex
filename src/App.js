import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    if (this.state.count === 20) {
      this.setState({
        count: 0
      });
    } else
      this.setState({
        count: this.state.count + 1
      });
  }
  decrement() {
    if (this.state.count === -30) {
      this.setState({
        count: 0
      });
    } else
      this.setState({
        count: this.state.count - 1
      });
  }
  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={e => this.decrement(e)}>-</button>
        <button onClick={e => this.increment(e)}>+</button>
        <br />
        <button onClick={e => this.reset(e)}>reset</button>
      </div>
    );
  }
}
export default App;
