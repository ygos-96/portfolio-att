import "./assets/arq/css/reset.css";
import "./assets/arq/css/buid.css";

import "../src/assets/arq/css/App.css";

import Header from "./components/header/header"
import CV from "./components/informations/cv"
import Skills from "./components/informations/skills"


function App() {
  return (
    <div className="App">
      <Header />
      <section className="info-cv justify-content-center align-items-center">
      <CV />
      <Skills />
      </section>
      
      </ div>
  );
}

export default App;
