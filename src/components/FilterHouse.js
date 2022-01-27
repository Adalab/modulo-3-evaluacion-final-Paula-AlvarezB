const FilterHouse = (props) => {
  const handleInputHouse = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.target.value,
    });
  };

  return (
    <div className="formItem">
      <label htmlFor="house">Busca por casa:</label>
      <select
        name="house"
        id="house"
        onChange={handleInputHouse}
        value={props.filterHouse}
      >
        <option value="Gryffindor">Gryffindor</option>

        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
};

export default FilterHouse;
