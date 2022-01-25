import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  //Llamada a la API
  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };
  const filteredCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
    })
    .filter((eachCharacter) => {
      if (filterHouse === "all") {
        return true;
      } else {
        return eachCharacter.house === filterHouse;
      }
    });

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = characters.find((user) => characters.id === routeId);
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <>
      <h1 className="title--big">Personajes de Harry Potter</h1>
      <Switch>
        <Route path="/" exact>
          <div>
            <main>
              <Filters
                handleFilter={handleFilter}
                filterName={filterName}
                filterHouse={filterHouse}
              />
              <CharacterList characters={filteredCharacters} />
            </main>
          </div>
        </Route>
        <Route path="/user/:userId" render={renderCharacterDetail}></Route>
      </Switch>
    </>
  );
}

export default App;
