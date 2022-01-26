import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getImageLink = () => {
    const givenImageUrl = props.character.image;
    return props.character.image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/text=HarryPotter"
      : givenImageUrl;
  };
  const getStatus = () => {
    if (props.character.alive === true) {
      return (
        <p>
          {" "}
          el personaje está vivo{" "}
          <i class="fab fa-creative-commons-sampling"></i>{" "}
        </p>
      );
    } else if (props.character.alive === false) {
      return (
        <p>
          {" "}
          el personaje está muerto <i class="fas fa-skull-crossbones"></i>
        </p>
      );
    }
  };

  const getGender = () => {
    return props.character.gender === "female" ? (
      <span>
        Mujer <i class="fas fa-user"></i>
      </span>
    ) : (
      <span>
        {" "}
        Hombre <i class="fas fa-male"></i>
      </span>
    );
  };

  const getSpecies = () => {
    if (props.character.species === "human") {
      return "humano";
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
    <>
      <section>
        <Link to="/">Volver al inicio</Link> <h2>Detalles del personaje</h2>
        <img
          className="card__img"
          src={getImageLink()}
          alt={`Foto de {props.character.name}`}
          title={`Foto de {props.character.name}`}
        />
        <h4 className="card__title">{props.character.name}</h4>
        <p>Estatus: {getStatus()}</p>
        <p>Especie: {getSpecies()}</p>
        <p>Género: {getGender()}</p>
        <p>Casa: {props.character.house}</p>
        <p>{props.character.id}</p>
      </section>
    </>
  );
};
export default CharacterDetail;
