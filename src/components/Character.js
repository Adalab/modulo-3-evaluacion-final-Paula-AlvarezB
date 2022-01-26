import { Link } from "react-router-dom";
import Hedwig from "../images/Hedwig.png";

const Character = (props) => {
  const getImageLink = () => {
    const givenImageUrl = props.character.image;
    return props.character.image === "" ? Hedwig : givenImageUrl;
  };
  const getSpecies = () => {
    if (
      props.character.species === "human" &&
      props.character.gender === "male"
    ) {
      return "humano";
    } else if (
      props.character.species === "human" &&
      props.character.gender === "female"
    ) {
      return "humana";
    } else if (props.character.species === "half-giant") {
      return "semigigante";
    } else if (props.character.species === "werewolf") {
      return "hombre-lobo";
    } else if (props.character.species === "cat") {
      return "gato";
    } else if (props.character.species === "ghost") {
      return "fantasma";
    } else {
      return props.character.species;
    }
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
      <p className="card__description">Especie: {getSpecies()}</p>
    </Link>
  );
};

export default Character;
