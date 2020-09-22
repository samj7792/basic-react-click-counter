import React, { Fragment } from "react";

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
        <Header />
        <Counter clicks={this.state.clicks} onClick={this.incr} />
      </Fragment>
    );
  }
}

const Header = () => {
  return (
    <header>
      <h1>Click Counter</h1>
    </header>
  );
};

const Counter = ({ clicks, onClick }) => {
  return <button onClick={onClick}>{clicks}</button>;
};

export default App;
