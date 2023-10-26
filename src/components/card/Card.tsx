import { Component } from 'react';
import './card.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Card extends Component {
  render() {
    return (
      <li className="card">
        <img
          className="card__image"
          src="https://i.dummyjson.com/data/products/71/1.jpg"
          width="100"
          alt="card"
        />
        <div className="card__name">name</div>
        <div className="card__description">description</div>
      </li>
    );
  }
}

export default Card;
