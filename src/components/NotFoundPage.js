import { Link } from "react-router-dom";
const NotFoundPage = (props) => {
  return (
    <>
      <a href="#" onClick={props.resetFilter}>
        Volver al inicio{" "}
      </a>
      <p>
        ¡Vaya! No se ha encontrado ningún personaje que coincida con la palabra{" "}
        {props.filterName}
      </p>
    </>
  );
};

export default NotFoundPage;
