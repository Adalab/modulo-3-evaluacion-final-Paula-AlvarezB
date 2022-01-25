import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  //VARIABLES DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  //Llamada a la API
  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);
  const handleFilter = (data) => {
    setFilterName(data);
  };
  const filteredCharacters = characters.filter((eachCharacter) => {
    return eachCharacter.name.toLowerCase().includes(filterName.toLowerCase());
  });
  console.log(filteredCharacters);
  return (
    <div>
      <h1 className="title--big">Personajes de Harry Potter</h1>
      <main>
        <Filters handleFilter={handleFilter} />
        <CharacterList characters={filteredCharacters} />
      </main>
    </div>
  );
}

export default App;
