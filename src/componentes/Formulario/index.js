import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {
    // useState é um hook que permite adicionar estado a um componente funcional

    // O useState retorna um array com dois elementos, o primeiro é o valor do estado e o segundo 
    // é uma função que permite alterar o valor do estado.

    // hooks são funções que permitem adicionar funcionalidades a componentes funcionais.
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('O formulário foi enviado!' + nome + cargo + imagem + time);
        // O props.aoColaboradorCadastrado é a função que foi passada para o componente Formulario 
        props.aoColaboradorCadastrado({
            // é um objeto criado com as propriedades nome, cargo, imagem e time enviando ao componente App.js(
            // que é a raíz do projeto)
            nome,
            cargo,
            imagem,
            time
        });
        // Responsável por apagar os inputs de cargo, nome e formulário.
        setCargo('');
        setNome('');
        setImagem('');

    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                {/* Label e placeholder são propriedades do componente CampoTexto */}
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    // Todos esses campos são propriedades do componente CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome..." 
                    valor ={nome}
                    // aoAlterado é uma propriedade do componente CampoTexto 
                    // que recebe uma função que é chamada toda vez que o valor do campo é alterado.
                    aoAlterado ={valor => setNome(valor)}
                    />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo..." 
                    valor ={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem..." 
                    valor ={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.nomeDosTimes}
                    // aoAlterado é uma propriedade do componente ListaSuspensa
                    // que recebe uma função que é chamada toda vez que o valor do campo é alterado.
                    valor ={time}
                    aoAlterado={valor => setTime(valor)}
                    
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;