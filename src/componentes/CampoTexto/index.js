// Uma forma diferente de fazer uma função de react (Arrow Function)

import './CampoTexto.css';


const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        // Pegando o valor do campo e 
        // passando para a função aoAlterado que foi passada para o componente CampoTexto
        props.aoAlterado(evento.target.value);
    }

    return(
        <div className="campo-texto">
            {/* props.label é a propriedade label que foi passada para o componente CampoTexto */}
            <label>{props.label}</label>
            {/* props.placeholder é a propriedade placeholder que foi passada para o componente CampoTexto */}
            <input value={props.valor} onChange={aoDigitado} 
                required={props.obrigatorio} placeholder= {props.placeholder}/>
        </div>
    )
}

export default CampoTexto;