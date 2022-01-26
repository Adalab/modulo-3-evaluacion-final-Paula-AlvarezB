const NotFoundPage = (props) => {
  return (
    <p>
      Vaya!No se ha encontrado ningún personaje que coincida con la palabra
      {props.filterName}:(
    </p>
  );
};

export default NotFoundPage;
