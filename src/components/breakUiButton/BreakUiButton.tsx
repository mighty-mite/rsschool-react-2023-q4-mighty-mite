import { Component } from 'react';
import './breakUiButton.scss';

interface State {
  error: boolean;
}

class BreakUiButton extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { error: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // fetch('foo-endpoint').then((data) => data.json());
      throw new Error('error');
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    }
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <button type="button" className="break error">
          Error!
        </button>
      );
    }
    return (
      <button className="break" type="button" onClick={this.handleClick}>
        Break it
      </button>
    );
  }
}

export default BreakUiButton;
