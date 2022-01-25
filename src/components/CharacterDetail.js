import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getImageLink = () => {
    const givenImageUrl = props.character.image;
    return props.character.image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/text=HarryPotter"
      : givenImageUrl;
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
        <p>Estatus: {props.character.alive}</p>
        <p>
          Especie: {props.character.species}
          <p>Género: {props.character.gender}</p>Casa: {props.character.house}
        </p>
      </section>
    </>
  );
};
export default CharacterDetail;
