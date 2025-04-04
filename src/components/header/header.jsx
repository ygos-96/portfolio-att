import { useEffect } from "react";
import "../../assets/arq/css/reset.css";
import "../../assets/arq/css/buid.css";
import "./header.css";
import typingEffect from "../../assets/arq/js/typing.js";


import InfoHeader from "./info-header/info-header.jsx";

const Header = () => {
  useEffect(() => {
    typingEffect();
  }, []);
  return (
    <header className="header d-flex flex-column justify-content-center align-items-center">
      <div className="font-title text-center mt-5">
        <h1>Olá, seja bem vindo </h1>
        <h2>Portfólio</h2>
      </div>
      <InfoHeader />   
    </header>
  );
};
export default Header;
