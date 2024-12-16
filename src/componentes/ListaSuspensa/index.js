import "./ListaSuspensa.css";

const ListaSuspensa = (props) =>{
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {/* Deve ser map, porque ele intera sobre cada item da array, e transforma em um novo array */}
                {/* Diferente do forEach, que não retorna nada (Não cria uma nova array), 
                e o map retorna um novo array */}
                <option value="">Escolha seu time</option>
                {props.itens.map(item => 
                    {return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default ListaSuspensa;