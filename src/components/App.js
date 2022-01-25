import "../styles/App.scss";
import getApiData from "../services/api";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

function App() {
  //CONSTANTES
  const [characters, setCharacters] = useState([]);

  //Llamada a la API
  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);
  console.log(characters);
  return (
    <div>
      <h1 className="title--big">Personajes de Harry Potter</h1>
      <main>
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}

export default App;
