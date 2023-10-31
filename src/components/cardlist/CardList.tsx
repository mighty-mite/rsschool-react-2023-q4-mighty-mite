import { useState, useEffect } from 'react';
import Service from '../../service/Service';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
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

interface IProps {
  onSearch: string;
}

function CardList(props: IProps) {
  const { onSearch } = props;
  const service = new Service();

  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);
  const [text] = useState(localStorage.getItem('search') || '');

  const onRequest = () => {
    service.searchProducts(text).then((data) => {
      setCards(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    setLoading(true);
    service.searchProducts(onSearch).then((data) => {
      setCards(data);
      setLoading(false);
    });
  }, [onSearch]);

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

  const spinner = loading ? <Spinner /> : null;

  return (
    <ul className="cardlist">
      {content}
      {spinner}
    </ul>
  );
}

export default CardList;
