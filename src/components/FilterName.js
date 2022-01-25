const FilterName = (props) => {
  const handleInputName = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="name">Busca por personaje:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleInputName}
        value={props.filterName}
      />
    </>
  );
};

export default FilterName;
