import styled from 'styled-components';

export default function Navegacao(){
    const Container = styled.div`
        padding: 1rem 0
    `
    const Navegador = styled.a`
        padding: 6px 16px;
        border-radius: 24px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

                @media(max-width: 576px){
            font-size: 13px;
        }
    `
    return <Container className="container">
        <div className="row">
            <div className="col-12 justify-content-center d-flex" style={{gap: 40}}>
                <Navegador>Sobre o Projeto</Navegador>
                <Navegador>Inscricoes</Navegador>
                <Navegador>Painel Adm</Navegador>
            </div>
        </div>
    </Container>
}