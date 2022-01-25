import { Link } from "react-router-dom";
const Character = (props) => {
  const getImageLink = () => {
    const givenImageUrl = props.character.image;
    return props.character.image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/text=HarryPotter"
      : givenImageUrl;
  };

  return (
    <Link to={`/user/${props.character.id}`}>
      <img
        className="card__img"
        src={getImageLink()}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
      <p>{props.character.id}</p>
    </Link>
  );
};

export default Character;
