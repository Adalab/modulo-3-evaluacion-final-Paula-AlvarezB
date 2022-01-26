import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filters = (props) => {
  return (
    <section>
      <form className="form">
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterHouse
          handleFilter={props.handleFilter}
          filterHouse={props.filterHouse}
        />
      </form>
    </section>
  );
};

export default Filters;
