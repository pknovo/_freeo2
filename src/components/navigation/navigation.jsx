import React from "react";
import Rx from "rx";
import NavigationItem from "./navigation_item.jsx";
import "./navigation.styl";

function getNavigationItems() {
  return [
    {path: '/monitoring', description: 'Monitoring', default: true},
    {path: '/treatment', description: 'Treatment', default: false},
    {path: '/alarms', description: 'Alarms', default: false},
    {path: '/reporting', description: 'Reporting', default: false},
    {path: '/system-settings', description: 'Settings', default: false}
  ];
}

class Navigation extends React.Component {

  static defaultProps = {
    activeRoute: '/'
  };

  static propTypes = {
    activeRoute: React.PropTypes.string.isRequired
  };

  state = {
    activeRoute: this.props.activeRoute
  };

  render() {

    let items = getNavigationItems().map((item) => {

      return (
        <NavigationItem
          key={ item.path }
          route={ item.path }
          name={ item.description }
          active={ this.props.activeRoute == item.path }/>
      );
    });

    return (
      <nav className="Navigation">
        { items }
      </nav>
    );
  }

  componentDidMount() {
    const clicks = Rx.Observable.fromEvent('click', React.findDOMNode(this));
    clicks.forEach(function (e) {
      console.log(e);
    });
  }
}

export default Navigation;
