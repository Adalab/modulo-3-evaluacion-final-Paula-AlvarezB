const FilterName = (props) => {
  const handleInputName = (ev) => {
    props.handleFilter(ev.currentTarget.value);
  };

  return (
    <>
      <label htmlFor="name">Busca por personaje:</label>
      <input type="text" name="name" id="name" onChange={handleInputName} />
    </>
  );
};

export default FilterName;
