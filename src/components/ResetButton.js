const ResetButton = (props) => {
  return (
    <button className="button" onClick={props.resetFilter}>
      Reset
    </button>
  );
};

export default ResetButton;
