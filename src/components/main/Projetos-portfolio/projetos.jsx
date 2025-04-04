import "../../../assets/arq/css/buid.css";
import "../../../assets/arq/css/reset.css";
import "./projetos.css"

import Carrossel from "./Carrossel/carrossel";

const Portfolio = () => {
    return (
        <section className="projetos-portfolio">
            <div className="portfolio mb-5">
                <div className=" py-5 container-fluid d-flex flex-column justify-content-center align-items-center">
                    <h2 className="font-title-section text-dark mb-5">Portfólio</h2>
                    <div className="mt-5">
                        <Carrossel />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Portfolio;