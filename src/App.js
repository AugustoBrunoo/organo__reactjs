// é necessário importar o componente Banner para que ele seja renderizado na tela. 
// Para isso, adicione a linha de código abaixo no arquivo App.js:
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';

// Outro método de importar um componente, transformando o nome dele em index.js, para 
// não houver repetição de nome no caminho do import e ficar mais limpo.
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

// Raíz do projeto
function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ];
  
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger;
    // console.log(colaborador); ver o card do colaborador no console
    // Adiciona um novo colaborador ao array de colaboradores antigos 
    // e retorna um novo array com o novo colaborador adicionado.
    setColaboradores([...colaboradores, colaborador]);
    
  }

  return (
    <div className="App"> 
      {/* Só de colocar o nome da função Banner entre as tags <Banner/> o componente é renderizado na tela. */}
      {/* todo componente é essa cor  */}
      <Banner/>
      {/* O atributo aoColaboradorCadastrado recebe a função aoNovoColaboradorAdicionado que
      é chamada toda vez que um novo colaborador é adicionado.  */}
      <Formulario nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {/* Com a tecla command + clique no componente, voce é redirecionado para o arquivo do componente. */}

      {/* O componente Time é renderizado na tela com o nome do time. */} 
      {/* A key serve para identificar o componente, para que o React saiba qual componente foi alterado.
      e renderizar apenas o componente que foi alterado. */}
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria ={time.corPrimaria} 
        corSecundaria ={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
