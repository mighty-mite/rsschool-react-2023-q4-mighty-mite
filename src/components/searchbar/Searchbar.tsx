import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Searchbar extends Component {
  render() {
    return (
      <form className="searchbar">
        <input type="text" className="search-input" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;
