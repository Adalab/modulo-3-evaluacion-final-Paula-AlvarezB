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
  const [filterGender, setFilterGender] = useState("all");
  const [filterAlive, setFilterAlive] = useState("");

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
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    } else if (data.key === "alive") {
      setFilterAlive(data.value);
    }
  };

  const resetFilter = () => {
    setFilterName("");
    setFilterHouse("Gryffindor");
    setFilterGender("all");
  };
  const filteredCharacters = characters
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(filterName.toLowerCase());
    })
    .filter((eachCharacter) => {
      if (filterGender === "all") {
        return true;
      } else {
        return eachCharacter.gender === filterGender;
      }
    })
    .filter((eachCharacter) => {
      if (filterAlive === "alive") {
        return eachCharacter.alive === true;
      } else if (filterAlive === "dead") {
        return eachCharacter.alive === false;
      } else {
        return eachCharacter;
      }
    });

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.userId;

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
                filterGender={filterGender}
                filterAlive={filterAlive}
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
        {/* <Route>
          <NotFoundPage2 />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
