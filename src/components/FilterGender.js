const FilterGender = (props) => {
  const handleInputGender = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
    <>
      <div className="formItem">
        <label htmlFor="gender">Selecciona el género</label>
        <select
          name="gender"
          id="gender"
          onChange={handleInputGender}
          value={props.filterGender}
        >
          <option value="all">Todos</option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
        </select>
      </div>
    </>
  );
};

export default FilterGender;
