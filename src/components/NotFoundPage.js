import { Link } from "react-router-dom";
const NotFoundPage = (props) => {
  return (
    <div className="notFoundPage">
      <a href="#" onClick={props.resetFilter}>
        Volver al inicio{" "}
      </a>
      <p className="notFoundPage__snap">
        ¡Vaya! No se ha encontrado ningún personaje que coincida con la palabra{" "}
        {props.filterName}
      </p>
    </div>
  );
};

export default NotFoundPage;
