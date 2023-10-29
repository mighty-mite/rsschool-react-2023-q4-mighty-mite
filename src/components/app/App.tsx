import { Component } from 'react';
import Searchbar from '../searchbar/Searchbar';
import CardList from '../cardlist/CardList';
import BreakUiButton from '../breakUiButton/BreakUiButton';

interface IState {
  text: string;
}

export default class App extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onType = (query: string) => {
    this.setState({ text: query });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="app">
        <Searchbar onType={this.onType} />
        <CardList onSearch={text} />
        <BreakUiButton />
      </div>
    );
  }
}
