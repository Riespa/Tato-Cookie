import React from 'react';
import "../styles/cookieProductCard.css";

class Button extends React.Component {
  handleClick = () => {
    const { action } = this.props;
    action();
  }

  render() {
    const { label } = this.props;
    return (
      <button onClick={this.handleClick}>{label}</button>
    );
  }
}

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleBuyClick = () => {
    this.setState({ clicked: true });
  }

  handleRemoveClick = () => {
    this.setState({ clicked: false });
  }

  render() {
    const { clicked } = this.state;
    const bottomClass = `bottom${clicked ? ' clicked' : ''}`;
    return (
      <div className={bottomClass}>
        <Button label="Buy" action={this.handleBuyClick} />
        <Button label="Remove" action={this.handleRemoveClick} />
      </div>
    );
  }
}

export default Bottom;