/* eslint-disable react/state-in-constructor */
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    this.setState({ text: localStorage.getItem('search') });
  }

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
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;
