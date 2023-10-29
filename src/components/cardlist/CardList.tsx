import { Component } from 'react';
import Service from '../../service/Service';
import Card from '../card/Card';
import './cardlist.scss';

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

interface IProps {
  onSearch: string;
}

class CardList extends Component<IProps, IState> {
  service = new Service();

  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.onRequest();
  }

  componentDidUpdate(prevProps: { onSearch: string }) {
    const { onSearch } = this.props;
    if (onSearch !== prevProps.onSearch) {
      this.service
        .searchProducts(onSearch)
        .then((data) => this.setState({ cards: data }));
    }
  }

  onRequest() {
    this.service.getAllProducts().then(this.onCardsLoaded);
  }

  onCardsLoaded = (cards: ICard[]) => {
    this.setState({ cards });
  };

  render() {
    const { cards } = this.state;
    const content = cards.map((item) => {
      return (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
        />
      );
    });

    return <ul className="cardlist">{content} </ul>;
  }
}

export default CardList;
