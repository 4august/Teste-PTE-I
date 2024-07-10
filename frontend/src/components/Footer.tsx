import img from '../assets/logo-footer.png'
export default function Footer(){
    return <div className="container-fluid" style={{ backgroundColor: 'rgba(28, 50, 187, 1)'}}>
        <div className="row">
            <div className="col-10 m-auto">
                <div className="d-flex justify-content-between">
                <span style={{alignSelf: 'center', color: "#ffffff"}}>Termos de Uso | Política de Privacidade</span>
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
}