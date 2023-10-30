/* eslint-disable react/no-unused-state */
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

  componentDidUpdate(prevProps: object, prevState: State): void {
    const { error } = this.state;
    if (error !== prevState.error) throw new Error('hey');
  }

  handleClick() {
    try {
      throw new Error('error');
    } catch (error) {
      this.setState({ error: true });
      console.error(error);
    }
  }

  render() {
    return (
      <button className="break" type="button" onClick={this.handleClick}>
        Break it
      </button>
    );
  }
}

export default BreakUiButton;
