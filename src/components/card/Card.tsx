import './card.scss';

interface Props {
  description: string;
  key: number;
  thumbnail: string;
  title: string;
}

function Card(props: Props) {
  const { key, thumbnail, description, title } = props;
  return (
    <li className="card" key={key}>
      <img className="card__image" src={thumbnail} width="100" alt={title} />
      <div className="card__name">{title}</div>
      <div className="card__description">{description}</div>
    </li>
  );
}

export default Card;
