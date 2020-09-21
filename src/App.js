import React, { Fragment } from "react";
import Counter from "./Counter";

class App extends React.Component {
  state = {
    clicks: 0,
  };

  incr = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <Fragment>
        <header>
          <h1>Click Counter</h1>
        </header>
        <Counter clicks={this.state.clicks} onClick={this.incr} />
      </Fragment>
    );
  }
}

export default App;
