import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navegacao from "../components/Navegacao";
import Noticia from "../components/Noticia";
import Objetivos from "../components/Objetivos";
export default function Home() {
    return <>
    <Header />
    <Navegacao/>
    <Banner/>
    <Noticia/>
    <Objetivos/>
    <Footer/>
    </>
}