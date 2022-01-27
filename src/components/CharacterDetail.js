import { Link } from "react-router-dom";
import Hedwig from "../images/Hedwig.png";
const CharacterDetail = (props) => {
  const getImageLink = () => {
    const givenImageUrl = props.character.image;
    return props.character.image === "" ? Hedwig : givenImageUrl;
  };
  const getStatus = () => {
    if (props.character.alive === true) {
      return (
        <span>
          {" "}
          el personaje está vivo{" "}
          <i class="fab fa-creative-commons-sampling"></i>{" "}
        </span>
      );
    } else if (props.character.alive === false) {
      return (
        <span>
          {" "}
          el personaje está muerto <i class="fas fa-skull-crossbones"></i>
        </span>
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
    <>
      <section className="characterDetail">
        <Link to="/">Volver al inicio</Link> <h2>Detalles del personaje</h2>
        {props.character === undefined ? (
          "personaje no encontrado"
        ) : (
          <div className="characterDetail__card">
            <img
              className="characterDetail__card--image"
              src={getImageLink()}
              alt={`Foto de {props.character.name}`}
              title={`Foto de {props.character.name}`}
            />
            <div className="characterDetail__card--info">
              <h4 className="characterDetail__card--title">
                {props.character.name}
              </h4>

              <p>Estatus: {getStatus()}</p>
              <p>Especie: {getSpecies()}</p>
              <p>Género: {getGender()}</p>
              <p>Casa: {props.character.house}</p>
              <p>{props.character.id}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default CharacterDetail;
