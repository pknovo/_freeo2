import React from "react";
import Splash from "./Splash";
import Monitoring from "./Monitoring";

class Application extends React.Component {

  static defaultProps = {
    initialCount: 2000
  };

  static propTypes = {
    initialCount: React.PropTypes.number.isRequired
  };

  state = {
    count: this.props.initialCount
  };

  render() {
    return (
      <div>
        {this.state.count}
        <Splash />
      </div>
    );
  }

  componentDidMount() {}
}

export default Application;
