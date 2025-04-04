import "../../../../../assets/arq/css/reset.css";
import "../../../../../assets/arq/css/buid.css";
import ImgSkills from "../../../../../assets/arq/img/box-habilidades.png";

import "./skills.css";


const Skills = () => {
    return (
        <div className="info-skills mt-5">
            <h2 className="font-title-section mb-4 w-75 text-light">habilidades técnicas</h2>
            <img src={ImgSkills} alt="Imagem de box de habilidades" className="img-skills" width={"450"} height={"620"}/>
            </div>
    )
}

export default Skills;