import Character from "./Character";
import NotFoundPage from "./NotFoundPage";
const CharacterList = (props) => {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li className="card" key={index}>
        <Character character={character} />
      </li>
    );
  });
  const determineCharacters = () => {
    return <ul className="cards"> {characterElements}</ul>;
  };
  return <section>{determineCharacters()}</section>;
};

export default CharacterList;
