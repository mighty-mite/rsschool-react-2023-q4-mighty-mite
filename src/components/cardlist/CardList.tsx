import { Component } from 'react';
import Service from '../../service/Service';
import Card from '../card/Card';

interface ICard {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface IState {
  cards: ICard[];
}

class CardList extends Component {
  service = new Service();

  // eslint-disable-next-line react/state-in-constructor
  state: IState = {
    cards: [],
  };

  componentDidMount() {
    this.onRequest();
  }

  onRequest() {
    this.service.getAllProducts().then(this.onCardsLoaded);
  }

  onCardsLoaded = (cards: ICard[]) => {
    this.setState({ cards });
  };

  render() {
    const { cards } = this.state;

    return (
      <ul>
        {cards.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </ul>
    );
  }
}

export default CardList;
