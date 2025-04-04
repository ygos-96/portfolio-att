import "../../assets/arq/css/reset.css";
import "../../assets/arq/css/buid.css";
import "./footer.css";  

import WhatsApp from "../../assets/arq/img/icones-contato/whatsapp.png";
import Gmail from "../../assets/arq/img/icones-contato/gmail.png";
import LinkedIn from "../../assets/arq/img/icones-contato/linkedin.png";
import IconeCV from "../../assets/arq/img/icones-contato/cv.png";


const Footer = () => {
    return (
    <footer className="footer justify-content-center align-items-center p-5">
        <div>
            <p className="text-light font-main fs-32 w-75">Gostou do que viu? Estou ansioso para te conhecer! Me mande uma mensagem para que possamos conversar 😀</p>
            <div className="d-flex w-50 mt-3">
                <input className="form-control" type="text" placeholder="Seu nome" />
                <img src={WhatsApp} className="mx-4 icon-contat" alt="" />
            </div>
        </div>
        <div className="division"></div>
        <div className="contat">
            <p className="font-main fs-32 text-light">outros contatos</p>
            <div className="my-3">
                <img src={Gmail} className="me-2 icon-contat" height="57" width="57" alt="" />
                <img src={LinkedIn} className="mx-2 icon-contat" height="57" width="57" alt="" />
            </div>
            <p className="font-main fs-32 text-light">Baixar cv</p>
            <button className="bg-transparent border-0 p-0">
            <img src={IconeCV} height="57" width="57" alt="" className="icon-contat" />
            </button>
        </div>
    </footer>
    );
}

export default Footer;  