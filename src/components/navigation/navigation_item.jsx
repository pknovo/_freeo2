import React from "react";


class NavigationItem extends React.Component {

  static defaultProps = {
    active: false,
    name: '',
    route: ''
  };

  static propTypes = {
    active: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired
  };

  state = {
    active: this.props.active
  };

  render() {

    const classValue = `Navigation__item ${ this.props.active ? 'Navigation__item-active' : '' }`;

    return (
      <a className={ classValue } href={`#${this.props.route}`}>
        { this.props.name }
      </a>
    );
  }

  componentDidMount() {
  }
}

export default NavigationItem;
