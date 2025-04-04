import PropTypes from "prop-types";
import "../../../../../assets/arq/css/reset.css";
import "../../../../../assets/arq/css/buid.css";
import "./itemCV.css";

const ItemCV = (props) => {
  return (
    <div className="mb-2 font-main d-flex">
      <strong className="info-curriculo mx-4 fs-18">{props.ano}</strong>
      <div className="mb-2">
        <p className="mb-0 fs-18">{props.titulo}</p>
        <p className="mb-0 font-alternative">{props.instituicao}</p>
      </div>
    </div>
  );
};

ItemCV.propTypes = {
  ano: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  instituicao: PropTypes.string.isRequired,
};

export default ItemCV;
