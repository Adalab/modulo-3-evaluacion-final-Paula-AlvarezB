import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import NotFoundPage from "./NotFoundPage";

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
    const routeId = props.match.params.userId;
    console.log(routeId);
    const foundCharacter = characters.find(
      (character) => character.id === routeId
    );
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
              <CharacterList
                filterName={filterName}
                characters={filteredCharacters}
              />
            </main>
          </div>
        </Route>
        <Route path="/user/:userId" render={renderCharacterDetail}></Route>
        {/* <Route>
          <NotFoundPage />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
