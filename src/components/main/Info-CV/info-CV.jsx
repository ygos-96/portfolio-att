import "./info-cv.css"
import CV from "../Info-CV/CV/cv";
import Skills from "../Info-CV/CV/skills/skills";

const InfoCV = () => {
  return (
        <section className="p-5 info-cv d-flex justify-content-center align-items-center">
            <CV />
            <Skills />
        </section>
  );
};

export default InfoCV;
