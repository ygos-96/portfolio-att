import '../../../../../assets/arq/css/buid.css'

const ItemCarrossel = ({title = "Não foi encontrado projeto", descriptionItem = "Não foi encontrado projeto", Image, urlGithub, urlProjeto}) => {
    return(
        
        <div className="item"
        style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
            <div className="content">
                <div className="project fs-70 font-main">{title}</div>
                <div className="descriptionItem font-main fs-18">{descriptionItem}</div>
                <div className="btn-carrossel mt-4">
                    <a href={urlGithub} target="_blank"><button aria-label="botao que leva para o github"><i class="fab fa-github fs-25 text-light"></i></button></a>
                    <a href={urlProjeto} target="_blank"><button aria-label="botao que leva para o projeto"><i class="fas fa-external-link-square-alt fs-25 text-light"></i></button></a>
                </div>
            </div>
        </div>
    )
}


export default ItemCarrossel;