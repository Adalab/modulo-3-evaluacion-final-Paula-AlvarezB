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
    if (characterElements.length === 0) {
      return <NotFoundPage filterName={props.filterName} />;
    } else {
      return <ul className="cards"> {characterElements}</ul>;
    }
  };
  return <section>{determineCharacters()}</section>;
};

export default CharacterList;
