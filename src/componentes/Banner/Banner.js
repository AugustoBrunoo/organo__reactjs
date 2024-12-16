// O CSS do componente banner deve ser importado aqui, para que ele seja aplicado ao componente.
import './Banner.css';

function Banner (){
    return(
        // A imagem do banner é um componente do React
        // Parece HTML, mas é JSX - JavaScript XML
        // A linguagem que o React entende
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>

    )
}

export default Banner;