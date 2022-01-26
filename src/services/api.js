// Fichero src/services/api.js

const getApiData = (filterHouse) => {
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
          house: character.house,
          alive: character.alive,
          gender: character.gender,
          id: `${character.name.replaceAll(
            " ",
            "_"
          )}${character.actor.replaceAll(" ", "_")}`,
        };
      });
      return cleanData;
    });
};

export default getApiData;
