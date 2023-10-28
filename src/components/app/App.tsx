/* eslint-disable react/state-in-constructor */
import { Component } from 'react';
import Searchbar from '../searchbar/Searchbar';
import CardList from '../cardlist/CardList';
import BreakUiButton from '../breakUiButton/BreakUiButton';

export default class App extends Component {
  state = {
    text: '',
  };

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
