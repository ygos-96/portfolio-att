import '../header.css'
import ImgSeta from "../../../assets/arq/img/desenho-de-seta.png";
import ImgDev from "../../../assets/arq/img/caricatura.png";

const InfoHeader = () => {
    return (
        <div className="info-header mt-5">
        <div className="d-flex justify-content-center align-items-center">
        <div className="card-description font-main p-5">
          <p className="fs-15">
            Olá! Me chamo <strong className="contrast">Ygor</strong>, e sou um
            desenvolvedor frontend em formação! Gosto MUITO da área de
            tecnologia, e tenho certeza que posso contribuir em qualquer time
            com as minhas habilidades.
          </p>
          <p className="fs-15">
            Estou sempre me desafiando com novos projetos e participando de
            comunidades de programação para buscar feedback de outros
            desenvolvedores e desenvolvedoras. Além de tentar ajudar essas
            pessoas com o que eu já aprendi. 😁
          </p>
          <p className="fs-15">
            Ah, gosto muito de futebol, de jogos eletrônicos, filmes, séries,
            animes e outras nerdices. 🤓
          </p>
        </div>
        </div>
        <div className="img-info d-flex justify-content-between align-items-center">
          <img
            src={ImgSeta}
            width="85"
            height="85"
            alt="Seta indicando o card de descrição"
          />
          <img
            src={ImgDev}
            width="285"
            height="465"
            alt="Imagem que reprensenta o desenvolvedor"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="typing-container text-light fs-18 p-3 rounded"
            id="typing"
          ></div>
        </div>
      </div>
    )
}

export default InfoHeader