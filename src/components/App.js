import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import NotFoundPage2 from "./NotFoundPage2";
import NotFoundPage from "./NotFoundPage";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  //Llamada a la API
  useEffect(() => {
    getApiData(filterHouse).then((charactersData) => {
      setCharacters(charactersData);
    });
  }, [filterHouse]);
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };

  const resetFilter = () => {
    setFilterName("");
    setFilterHouse("Gryffindor");
  };
  const filteredCharacters = characters.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.userId;

    // console.log(routeId.replaceAll("e", "i"));
    const foundCharacter = characters.find(
      (character) => character.id === routeId
    );

    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <>
      <header className="header">
        <h1 className="title--big">Personajes de Harry Potter</h1>
      </header>
      <Switch>
        <Route path="/" exact>
          <div>
            <main className="mainContainer">
              <Filters
                handleFilter={handleFilter}
                filterName={filterName}
                filterHouse={filterHouse}
                resetFilter={resetFilter}
              />

              {filteredCharacters.length === 0 ? (
                <NotFoundPage
                  filterName={filterName}
                  resetFilter={(ev) => {
                    ev.preventDefault();
                    setFilterName("");
                  }}
                />
              ) : (
                <CharacterList
                  setFilterName={setFilterName}
                  filterName={filterName}
                  characters={filteredCharacters}
                />
              )}
            </main>
          </div>
        </Route>
        <Route path="/user/:userId" render={renderCharacterDetail}></Route>
        <Route>
          <NotFoundPage2 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
