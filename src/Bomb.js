// your Bomb code here!
import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  handleLoad = () => {
    if (this.state.secondsLeft > 0) {
      const newTime = this.state.secondsLeft - 1;
      this.setState({
        secondsLeft: newTime,
      });
    } else {
      clearInterval(this.countDown);
    }
  };

  countDown = setInterval(this.handleLoad, 1000);

  render() {
    return (
      <div>
        {this.state.secondsLeft === 0
          ? "Boom!"
          : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}

export default Bomb;
