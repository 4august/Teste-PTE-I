import styled from 'styled-components';
import banner from '../assets/banner.png'

export default function Banner() {
    const Background = styled.div`
        background-image: url(${banner});
        height: 600px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media(max-width: 1024px){
            height: 500px;
        }
        @media(max-width: 992px){
            height: 450px;
        }
        @media(max-width: 768px){
            height: 325px;
        }
                    @media(max-width: 576px){
            height: 240px;
        }
    `
    return <Background className="container-fluid"></Background>
}