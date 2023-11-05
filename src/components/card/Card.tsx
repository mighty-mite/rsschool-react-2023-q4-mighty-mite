import './card.scss';
import { Link } from 'react-router-dom';

interface Props {
  description: string;
  thumbnail: string;
  title: string;
  id: string;
}

function Card(props: Props) {
  const { thumbnail, description, title, id } = props;
  return (
    <li className="card">
      <Link className="card__link" to={`/details/${id}`}>
        <img className="card__image" src={thumbnail} width="100" alt={title} />
        <div className="card__name">{title}</div>
        <div className="card__description">{description}</div>
      </Link>
    </li>
  );
}

export default Card;
