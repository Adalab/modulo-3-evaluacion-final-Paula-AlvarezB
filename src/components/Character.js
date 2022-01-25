const Character = (props) => {
  const getImageLink = () => {
    const givenImageUrl = props.character.image;
    return props.character.image === ""
      ? "https://via.placeholder.com/210x295/ffffff/666666/text=HarryPotter"
      : givenImageUrl;
  };
  return (
    <a href="#/user/473cad77-5d41-45ac-a925-e0dbe1d3e417">
      <img
        className="card__img"
        src={getImageLink()}
        alt={`Foto de {props.character.name}`}
        title={`Foto de {props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
    </a>
  );
};

export default Character;
