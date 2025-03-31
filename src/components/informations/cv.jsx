import "../../assets/arq/css/reset.css";
import "../../assets/arq/css/buid.css";
import "./cv.css";
import ItemCV from './itemCV';



const CV = () => {
  return (
    <div className="text-white p-5 ">
      <section className="d-flex flex-column justify-content-center">
        <h2 className="font-title-section mb-4">formação</h2>
        <ItemCV ano="2018 - 2021" titulo="Técnico de Informática" instituicao="Senac Chácara" />
        <ItemCV ano="2021 - ATUAL" titulo="Desenvolvimento Web Front End" instituicao="Dnr Quest" />
      </section>

      <section className="mt-4 d-flex flex-column justify-content-center">
        <h2 className="font-title-section mb-4">experiência</h2>
        <ItemCV ano="2024 - ATUAL" titulo="Desenvolvedor Web Front-End" instituicao="Tuzinho Tattoo" />
        <ItemCV ano="2024" titulo="Site Original SP Tattoo" instituicao="link" />
        <ItemCV ano="2023" titulo="Land Page" instituicao="link" />
        <ItemCV ano="2022" titulo="Github API" instituicao="link" />
      </section>
    </div>
  );
};

export default CV;
