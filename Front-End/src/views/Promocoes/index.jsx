import Imagem1 from "../../assets/Imagens_Final/disney.jpg";
import Imagem2 from "../../assets/Imagens_Final/Africa.jpg";
import "../../views/Promocoes/style.css";

function Promocoes (){
    return(
        <section className="container">
            <h1>Promoções</h1>
            <div className="row">
                <div className="col">
                    <h2 className="text-end"> Aproveite essa promoção para Orlando</h2>
                    <p className="text-end">Viajar para Disney é o sonho de muitos adultos e crianças do mundo inteiro. Afinal,
                        quem não gostaria de se divertir nos parques mais famosos do mundo e conhecer personagens icônicos
                        do cinema e dos quadrinhos?

                        A casa do Mickey fica na ensolarada Orlando, na Flórida, e pode ser o destino perfeito para a sua
                        próxima viagem.
                    </p>
                </div>
                <div className="col">
                    <div className="card box_destino">
                        <img src={Imagem1} className="img-fluid rounded-start" alt="?"></img> 
                        <h5 className="card-title">Orlando</h5>
                        <p className="card-text">R$ 10.000,00</p>
                        <button type="button" className="btn btn-outline-secondary">Reserve agora!</button>
                    </div>
                </div>

                <div className = "row">
                    <div className="col">
                        <div className="card box_destino">
                            <img src={Imagem2} className="img-fluid rounded-start" alt="?"></img> 
                            <h5 className="card-title">Africa</h5>
                            <p className="card-text">R$ 12.000,000</p>
                            <button type="button" className="btn btn-outline-secondary">Reserve agora!</button>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Aproveite essa promoção para Africa</h2>
                        <p>Uma viagem à África carrega muito potencial para trazer novas experiências e informações, mas também
                            exige muita preparação para encarar essa savana.    Assim como toda viagem internacional, a jornada requer atenção especial para a documentação. Mas
                            além disso, é necessário observar as línguas faladas, as moedas utilizadas e as atrações únicas de
                            cada país.

                        </p>
                    </div>
                    
                </div>
                
            </div>    
        </section>
    )
}

export default Promocoes;