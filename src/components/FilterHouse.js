const FilterHouse = () => {
  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
      <select name="house" id="house">
        <option value="all">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
};

export default FilterHouse;
