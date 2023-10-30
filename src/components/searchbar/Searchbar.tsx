/* eslint-disable react/state-in-constructor */
import { Component } from 'react';
import './searchbar.scss';

interface IProps {
  onType: (query: string) => void;
}

class Searchbar extends Component<IProps> {
  state = {
    text: '',
  };

  componentDidMount() {
    this.setState({ text: localStorage.getItem('search') });
  }

  handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { onType } = this.props;
    const { text } = this.state;
    onType(text);
  };

  render() {
    const { text } = this.state;

    return (
      <form className="searchbar">
        <input
          value={text}
          onChange={(e) =>
            this.setState(() => {
              localStorage.setItem('search', e.target.value);
              return { text: e.target.value };
            })
          }
          type="text"
          className="search-input"
          placeholder="type here"
        />
        <button type="submit" onClick={this.handleClick}>
          Search
        </button>
      </form>
    );
  }
}

export default Searchbar;
