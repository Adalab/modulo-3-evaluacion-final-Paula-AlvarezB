import { Link } from "react-router-dom";
const NotFoundPage2 = () => {
  return (
    <>
      <Link to="/">Volver al inicio</Link>
      <div className="notFoundPage">
        return{" "}
        <p className="notFoundPage__snap">¡Vaya! Esta página no existe</p>;
      </div>
    </>
  );
};

export default NotFoundPage2;
