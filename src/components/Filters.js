import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterName handleFilter={props.handleFilter} />
        <FilterHouse />
      </form>
    </section>
  );
};

export default Filters;
