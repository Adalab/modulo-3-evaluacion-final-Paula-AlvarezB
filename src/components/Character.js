const Character = (props) => {
  return (
    <a href="#/user/473cad77-5d41-45ac-a925-e0dbe1d3e417">
      <img
        className="card__img"
        src={props.character.image}
        alt={`Foto de {props.character.name}`}
        title={`Foto de {props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">{props.character.species}</p>
    </a>
  );
};

export default Character;
