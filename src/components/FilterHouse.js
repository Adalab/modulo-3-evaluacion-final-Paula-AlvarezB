const FilterHouse = (props) => {
  const handleInputHouse = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
      <select
        name="house"
        id="house"
        onChange={handleInputHouse}
        value={props.filterHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="all">Todas</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
};

export default FilterHouse;
