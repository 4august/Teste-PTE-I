import img from '../assets/image 1.png'
export default function Objetivos(){
    return <div className="container pb-5">
        <div className="row">
            <img src={img} alt="" style={{margin: 'auto', width: '900px', objectFit: 'contain'}} />
        </div>
    </div>
}