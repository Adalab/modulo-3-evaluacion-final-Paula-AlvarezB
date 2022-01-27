import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import ResetButton from "./ResetButton";

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
        <ResetButton resetFilter={props.resetFilter} />
      </form>
    </section>
  );
};

export default Filters;
