import "../../assets/arq/css/reset.css";
import "../../assets/arq/css/buid.css";
import ImgSkills from "../../assets/arq/img/box-habilidades.png";


const Skills = () => {
    return (
        <div className="info-skills p-5 mt-5">
            <h2 className="font-title-section mb-4 w-75 text-light">habilidades técnicas</h2>
            <img src={ImgSkills} alt="Imagem de box de habilidades" />
            </div>
    )
}

export default Skills;