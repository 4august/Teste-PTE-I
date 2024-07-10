import styled from 'styled-components';
import Slider from "react-slick";
import img1 from '../assets/Property 1=Default.png'
import img2 from '../assets/Property 1=Variant2.png'
import img3 from '../assets/Property 1=Variant3.png'
import caminhao from '../assets/image 2.png'
import { useRef, useState } from 'react';
import button from '../assets/button.png'
import button2 from '../assets/button2.png'
import Inscricao from './Inscricao';

export default function Noticia() {
    const sliderRef = useRef<Slider>(null);
    const [openInscricao, setOpenInscricao] = useState(false)
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    const FirstSessao = styled.div`
        background-color: rgba(238, 251, 255, 1);
        padding-top: 2rem;
        padding-bottom: 2rem;

        h3{
            color: rgba(37, 85, 171, 1)
        }
        p{
            color: rgba(91, 96, 105, 1);
            line-height: 28px;
        }
    `
    const Carrossel = styled.div`
        background: #ffffff;
        padding: 20px 40px;
        border-radius: 16px;
        img{
            border-radius: 8px;
        }
        .slick-arrow .slick-next button{
            display: none !important
        }
        .navegadores{
            display: flex;
            justify-content: center
        }
        .navegadores img{
            width: 48px;
            object-fit: contain
        }
    `
    const SecondSession = styled.div`
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: relative
    `
    const Caminhao = styled.div`
                background-image: url(${caminhao}), linear-gradient(180deg, rgba(255, 255, 255, 0) 60.61%, #FFFFFF 100%);
                height: 300px;
                background-size: contain;
                background-repeat: no-repeat;
        }
    `
    return <>
        <FirstSessao className="container-fluid">
            <div className="row">
                <div className="col-10 m-auto">
                    <div className="row">
                        <div className="col-12 col-md-4" >
                            <Carrossel>
                                <Slider ref={sliderRef} {...settings}>
                                    <img src={img1} alt="" style={{ height: '200px !important' }} />
                                    <img src={img2} alt="" style={{ height: '200px !important' }} />
                                    <img src={img3} alt="" style={{ height: '200px !important' }} />
                                </Slider>
                                <div className='navegadores'>
                                    <img src={button2} onClick={() => sliderRef.current?.slickNext()} />
                                    <img src={button} onClick={() => sliderRef.current?.slickPrev()} />
                                </div>
                            </Carrossel>
                        </div>
                        <div className="col-12 col-md-8">
                            <h3>
                                Campanha MS Pela Vida já enviou mais de 50 toneladas de doações ao RS e em breve SENAI MS tomará a frente nos reparos de danos
                            </h3>
                            <p>
                                Após uma semana de operação, a campanha MS Pela Vida - Unidos pelo Rio Grande do Sul contabiliza números superlativos.
                                Mais de 213 mil itens básicos doados pela população sul-mato-grossense abastecem caminhões e aeronaves que partem diariamente com destino ao sul do país, em socorro às vítimas do maior desastre ambiental em solo gaúcho.
                                Mais de 50 toneladas de donativos já foram enviadas ao sul do país, em uma ação que contou com o trabalho de 1,5 mil voluntários até o momento.
                            </p>
                            <p>
                                O Presidente da FIEMS, Sérgio Longen, comenta os próximos passos da campanha: "A catástrofe do Rio Grande do Sul nos traz um alerta para o clima.
                                Precisamos entender essa mensagem e avaliar como implementar ações que evitem essa realidade em mais ocasiões.
                                <b>Mas agora a tarefa de casa brasileiro é atuar em socorro ao Rio Grande do Sul, e por este motivo em breve o SENAI tomará a linha de frente na luta para reparar os danos nas cidades gaúchas.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FirstSessao>
        <SecondSession className="container-fluid">
            <div className="row">
                <div className="col-10 m-auto">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h3>Próximos passos para reconstruir o RS</h3>
                            <p>
                                Mais do que arrecadações, é importante oferecer esperança de recomeço às famílias que perderam tudo nas enchentes do Rio Grande do Sul. Neste sentido, o Sistema Fiems, por meio do Senai,
                                está enviando duas unidades móveis para serem enviadas às cidades atingidas pelo desastre climático com serviços de eletrotécnica e marcenaria.
                            </p>
                            <p>A expectativa é enviar inicialmente uma equipe 26 pessoas, entre <b>engenheiros, professores e técnicos.</b>   </p>
                            <p><b>Tem interesse em se voluntariar? Preencha o formulário e se inscreva para ajuda as vítimas da maior catástrofe natural do Sul do país.</b> </p>

                            <button onClick={() => setOpenInscricao(true)}>QUERO PARTICIPAR</button>
                        </div>
                        <div className="col-12 col-md-4">
                            <Caminhao>
                            </Caminhao>
                        </div>
                    </div>
                </div>
            </div>

            <Inscricao isOpened={openInscricao} />

        </SecondSession>
    </>
}
