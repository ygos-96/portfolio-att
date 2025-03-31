import "../../assets/arq/css/reset.css";
import "../../assets/arq/css/buid.css";

const ItemCV = ({ ano, titulo, instituicao }) => {
  return (
    <div className="mb-2 font-main d-flex">
      <strong className="mx-4 fs-18">{ano}</strong>
      <div className="mb-2">
        <p className="mb-0 fs-18">{titulo}</p>
        <p className="mb-0 font-alternative">{instituicao}</p>
      </div>
    </div>
  );
};

export default ItemCV;
