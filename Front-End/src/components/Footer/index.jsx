import React from "react";
import "../Footer/style.css";

import Imagem1 from "../../assets/Icons/local.png";
import Imagem2 from "../../assets/Icons/telefone.png";
import Imagem3 from "../../assets/Icons/email.png";
import Imagem4 from "../../assets/Icons/ig.png";
import Imagem5 from "../../assets/Icons/tt.png";

function Footer(){
    return( 
        <footer>&copy; Lucas Ribeiro
        <div className="area-limite">
            <div className="box-rodape">
                <h5>Contato</h5>
                <div className="Icont-texto">
                    <img src={Imagem1} alt="Local"/>
                    <span>São João de Meriti - RJ</span>
                </div>
                <div className="Icont-texto">
                    <img src={Imagem2} alt="Telefone"/>
                    <span>4002-8922</span>
                </div>
                <div className="Icont-texto">
                    <img src={Imagem3} alt="E-mail Icon"/>
                    <span>Email: lukinhas.lr655@gmail.com</span>
                </div>
            </div>

            <div className="box-rodape">
                <h5>Nossas Redes Socias</h5>
                <div className="Icont-texto">
                    <img src={Imagem4} alt="Instagram"/>
                    <span><a href="https://www.instagram.com/_ribeiro_99/" 
                            real="external">ribeiro_99</a></span>
                </div>
                <div className="Icont-texto">
                    <img src={Imagem5} alt="Twitter"/>
                    <span>_ribeiro_99</span>
                </div>
                <div className="Icont-texto">
                    <img src={Imagem2} alt="Celular"/>
                    <span>(21) 97975-2482</span>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;