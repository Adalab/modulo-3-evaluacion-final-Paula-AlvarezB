import glasses from "../images/glasses.png";
const FilterName = (props) => {
  const handleInputName = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <div className="formItem">
      <label htmlFor="name">Busca por personaje:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleInputName}
        value={props.filterName}
        onSubmit={(ev) => ev.preventDefault()}
      />
    </div>
  );
};

export default FilterName;
