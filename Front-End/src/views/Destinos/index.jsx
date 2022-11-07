import Imagem1 from "../../assets/Imagens_Final/paris.jpg";
import Imagem2 from "../../assets/Imagens_Final/ny.jpg";
import Imagem3 from "../../assets/Imagens_Final/holanda.jpg";
import Imagem4 from "../../assets/Imagens_Final/londres.jpg";
import Imagem5 from "../../assets/NovasFotos/RioDeJaneiro.jpg";
import Imagem6 from "../../assets/Imagens_Final/saopaulo.jpg";
import Imagem7 from "../../assets/NovasFotos/Maldivas.jpg";
import Imagem8 from "../../assets/NovasFotos/Maragogi.jpg";
import Imagem9 from "../../assets/Imagens_Final/salvador.jpg";
import Imagem10 from "../../assets/Imagens_Final/disney.jpg";
import Imagem11 from "../../assets/Imagens_Final/Chernobyl1.jpg";
import Imagem12 from "../../assets/Imagens_Final/noronha.jpg";
import "../Destinos/style.css";

function Destinos(){
    return(
        <main className="Destinos">
        <div class="container">
        <h1>Destinos</h1>
        <div className="row">
          <div className="col-3">
            <img src={Imagem1} className="img-fluid rounded-start" alt="Paris"></img>  
            <div className="card-body">
            <h5 className="card-title">Paris, França</h5>
            </div> 
          </div>
          <div className="col-3">
            <img src={Imagem2} className="img-fluid rounded-start" alt="Eua"></img>  
            <div className="card-body">
            <h5 className="card-title">New York City, EUA</h5>
            </div> 
          </div>
          <div className="col-3">
            <img src={Imagem3} className="img-fluid rounded-start" alt="Holanda"></img>  
            <div className="card-body">
            <h5 className="card-title">Amsterdam, Holanda</h5>
            </div> 
          </div>
          <div className="col-3">
            <img src={Imagem4} className="img-fluid rounded-start" alt="Londres"/>
            <div className="card-body">
            <h5 className="card-title">Londres, UK</h5>
            </div>  
          </div>
          <div className="col-3">
          <img src={Imagem5} className="img-fluid rounded-start" alt="RJ"/> 
          <div className="card-body">
          <h5 className="card-title">Rio de Janeiro, Brasil</h5>
          </div>  
          </div>
          <div className="col-3">
            <img src={Imagem6} className="img-fluid rounded-start" alt="Sao Paulo"/>
            <div className="card-body">
            <h5 className="card-title">São Paulo, Brasil </h5>
            </div>   
          </div>
          <div className="col-3">
            <img src={Imagem7} className="img-fluid rounded-start" alt="Maldivas"/>
            <div className="card-body">
            <h5 className="card-title">Ilhas Maldivas</h5>
            </div>   
          </div>
          <div className="col-3">
            <img src={Imagem8} className="img-fluid rounded-start" alt="Alagoas"/>
            <div className="card-body">
            <h5 className="card-title">Alagoas, Brasil</h5>
            </div>   
          </div>
          <div className="col-3">
            <img src={Imagem9} className="img-fluid rounded-start" alt="Bahia"/>
            <div className="card-body">
            <h5 className="card-title">Bahia, Brasil</h5>
            </div>   
          </div>
          <div className="col-3">
            <img src={Imagem10} className="img-fluid rounded-start" alt="Disney"/>
            <div className="card-body">
            <h5 className="card-title">Disney, EUA</h5>
            </div>   
          </div>
          <div className="col-3">
            <img src={Imagem11} className="img-fluid rounded-start" alt="Chernobyl"/>
            <div className="card-body">
            <h5 className="card-title">Chernobyl</h5>
            </div>   
          </div>
          <div className="col-3">
            <img src={Imagem12} className="img-fluid rounded-start" alt="PE"/>
            <div className="card-body">
            <h5 className="card-title">Fernando de Noronha, Brasil</h5>
            </div>   
          </div>
        </div> 
        </div>  
    </main>
    )
}

export default Destinos;