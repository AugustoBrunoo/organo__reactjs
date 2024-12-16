import './Colaborador.css';

const Colaborador = (props) =>{
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>

    )
}

// Outra maneira de fazer o mesmo código acima 
// é desestruturando as props no parâmetro da função colocado entre chaves 

/* const Colaborador = ({nome, cargo, imagem}) =>{
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
} */

export default Colaborador;