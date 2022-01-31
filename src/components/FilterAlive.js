const FilterAlive = (props) => {
  const handleInputAlive = (ev) => {
    console.log(ev.target.value);
    props.handleFilter({
      key: "alive",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="alive">Vivo o muerto</label>
      <label htmlFor="isAlive">Vivo</label>
      <input
        type="radio"
        name="alive"
        value="alive"
        onChange={handleInputAlive}
        checked={props.filterAlive}
      />

      <label htmlFor="isAlive">Muerto</label>
      <input
        type="radio"
        name="alive"
        value="dead"
        onChange={handleInputAlive}
        checked={props.filterAlive}
      />
    </>
  );
};

export default FilterAlive;
