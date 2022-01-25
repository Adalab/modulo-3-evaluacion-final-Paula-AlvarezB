import Character from "./Character";
const CharacterList = (props) => {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li className="card" key={index}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul className="cards"> {characterElements}</ul>
    </section>
  );
};

export default CharacterList;
