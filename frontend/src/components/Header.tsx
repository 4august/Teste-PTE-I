import logo from "../assets/senai_logo.png"
import acessebilidade from "../assets/icon_acessebilidade.png"
import styled from 'styled-components';

export default function Header() {
    const Container = styled.div`
        background-color: #EDF9FE;
        position: relative
    `
    const Logo = styled.img`
        width: 100px;
        object-fit:  contain
    `
    const Acessebilidade = styled.img`
        position: absolute;
        right: calc(0% + 22px);
        top: 8%;
        width: 44px;
        height: 44px;
        object-fit: cover
    `
    return <Container className="container-fluid">
        <div className="row">
            <div className="col-10 m-auto">
                <Logo src={logo} alt="" />
                <Acessebilidade src={acessebilidade}/>
            </div>
        </div>
    </Container>

}