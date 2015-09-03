import React from "react";
import Splash from "./Splash.jsx";
import Monitoring from "./Monitoring.jsx";
import Navigation from "./navigation/navigation.jsx";

class Application extends React.Component {

  static defaultProps = {
    route: '/'
  };

  static propTypes = {
    route: React.PropTypes.string.isRequired
  };

  state = {
    route: this.props.route
  };

  render() {
    return (
      <div>
        <Splash />
        <Navigation activeRoute={ this.state.route }/>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      var route = window.location.hash.substr(1);
      this.setState({route: route});
    });
  }
}

export default Application;
