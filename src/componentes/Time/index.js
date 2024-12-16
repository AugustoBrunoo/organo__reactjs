import Colaborador from '../Colaborador';
import './Time.css'; 

// Responsável pelos cards dos times, será card responsivo
// Props vem do componente pai, que é o App.js
// ou seja vai estar escrito no App.js <Time nome="Nome do time"/>

const Time = (props)=> {
    // uma maneira de estilizar o componente é criar um objeto css e passar ele como propriedade do componente
    const css = {backgroundColor: props.corSecundaria};

    return(
            props.colaboradores.length > 0 ? <section className='time' style={css}>
             <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
             {/* <Colaborador /> */}
             {/* Colocamos na div para que o css seja aplicado a todos os colaboradores e manter o card na lateral */}
             <div className='colaboradores'>
                 {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}    
             </div>
         </section>
         : ''

        // props.colaboradores.length > 0 && <section className='time' style={css}>
        //     <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        //     {/* <Colaborador /> */}
        //     {/* Colocamos na div para que o css seja aplicado a todos os colaboradores e manter o card na lateral */}
        //     <div className='colaboradores'>
        //         {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}    
        //     </div>
        // </section>

        // A diferença desses dois é a lógica condicional para a lista de times aparecer só se tiver pelo menos
        // um colaborador cadastrado em algum time.
        

    );
}

export default Time;