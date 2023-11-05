import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Service from '../../service/Service';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import Pagination from '../pagination/Pagination';
import './cardlist.scss';

interface ICard {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: string;
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
  const [offset, setOffset] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const onRequest = () => {
    service.searchProducts(text).then((data) => {
      setCards(data.products);
      setNumberOfPages(Math.ceil(data.total / 10));
      setLoading(false);
      setSearchParams({ page: String(currentPage) });
    });
  };

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    setLoading(true);
    service.searchProducts(onSearch, offset).then((data) => {
      setCards(data.products);
      setLoading(false);
      setNumberOfPages(Math.ceil(data.total / 10));
      setOffset(0);
      setCurrentPage(1);
      setSearchParams({ page: String(currentPage) });
    });
  }, [onSearch]);

  useEffect(() => {
    setLoading(true);
    service.searchProducts(onSearch, offset).then((data) => {
      setCards(data.products);
      setLoading(false);
      setNumberOfPages(Math.ceil(data.total / 10));
      setSearchParams({ page: String(currentPage) });
    });
  }, [offset]);

  const handlePageNums = (pageNumber: number) => {
    setOffset(pageNumber * 10 - 10);
    setCurrentPage(pageNumber);
  };

  const query = searchParams.get('page') || '';

  const content = cards.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        thumbnail={item.thumbnail}
      />
    );
  });

  const spinner = loading ? <Spinner /> : null;

  return (
    <>
      <ul className="cardlist">
        {content}
        {spinner}
      </ul>
      <Pagination
        numberOfPages={numberOfPages}
        handlePageNums={handlePageNums}
        currentPage={currentPage}
      />
    </>
  );
}

export default CardList;
