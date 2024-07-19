import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/contato' element={<Contato/>} />
      <Route path='/fotos' element={<Fotos/>} />
      <Route path='/detalhes/:id' element={<Detalhes/>} />
    </Routes>
    </BrowserRouter>
  )
}

//Aqui estamos lidando com a funcionalidade mais importante do React: Os React Hooks.

//Este aqui e o useState: Ele será uma array de 2 itens, sendo o primeiro item o valor atual. O segundo item será uma função que modificará este valor. Exemplo de useState:

//const [exemplo, setExemplo] = useState(true);

//O que precisamos entender é que os valores dentro da const do useState são valores comuns. Ou seja, o "contador" é como se fosse uma const normal e idem o "setContador". Então podemos passa-lo dentro de um componente por meio de propriedades.

//Aqui o nosso valor atual será o "exemplo", que é um boolean de "true". O setExemplo será a função que mudará este valor.

//Colocamos os valores em [], pois eles são itens de uma lista.

//Vamos entender o que o hook está fazendo no nosso projeto:

//O hook está fazendo a modificação de fato no botão onde é a parte clicavél do projeto. Para deixar o botão clicavél chamamos o onClick, e dentro dele está sendo executado o setCarregando. O segundo valor é a negação do nosso valor atual(!carregando).
//Logo em seguida, estamos passando o operador ternário que indicará se a condição for "true" aparecerá a mensagem 'Carregar site', caso seja "false" 'Voltar para o carregamento'. O true é usado quando o site está em estado de carregamento, e o false para quando
//está totalmente carregado. Portanto o valor atual é o estado de carregamento e o valor que está sendo alterado é para o site totalmente carregado.

//Dentro do setCarregando estamos usando a negação do valor atual "carregando", tornando-o falso quando o clique acontecer, e vice-versa. Isso fará com que mude o estado para o oposto de cada um. Por exemplo:
//O valor inicial "carregando"('Carregar site'), é o primeiro a ser exibido pois é o valor "true". Já o segundo será exibido quando estiver contrariando o true, transformando-o em false. No estado false é onde vemos o site totalmente carregado. Alteraremos estes
//valores por meio de um botão, que negará o valor atual, transformando o valor atual no oposto, fazendo a aplicação alternar entre "Carregando" ou "Carregado".

//Agora teremos um useState usando números:

//Construíremos um useState que começara com o valor inicial de 0: const [contador, setContador] = useState(0);

//Como queremos adicionar um número a cada clique, adicionaremos um botão clicavél que faça isso:

//<button onClick={() => setContador(contador + 1)}>Adicionar</button>

//Por fim teremos um span, que mostrará o número atual de cliques.

//Chamamos o nosso componente de botão para passar como propriedade o setContador do useState.

//Este useEffect que criamos executará o console.log apenas na primeira vez que abrirmos a aplicação. O segundo será utilizando um array de dependência: Toda vez que o estado do contador for alterado, o console.log será executado.

//UseRef:

//O useRef resumidamente fará referência ao DOM, fazendo com que possamos acessar seus métodos e propriedades.

//O useRef foi criado no nosso código por esta constante: const video = useRef();

//Para usarmos o nosso useRef em uma div faremos uma referência à ele: <video ref={video}/>. Aqui estamos referenciando o hook no componente, podendo então passar os métodos e propriedades para este componente.

//Se olharmos em nosso console, o que nos dará acesso aos nossos métodos e propriedades é um "current".

//Inserimos o console.log com este current dentro do nosso useEffect, pois o mesmo só é carregado quando o componente é renderizado em tela. Exemplo:
//useEffect(() => {
  //console.log(video.current.pause())
// }, [])

//Podemos utilizar o useRef dentro de uma função de callback: Uma função que é executada à partir de um evento. Por isso criamos uma função para usar o useRef:
//function callBack() {
//console.log(video.current)
//}

//Agora para executar esta função de callback, passamos ela dentro do nosso botão com o onClick. Agora só podemos executar essa função, depois que todos os elementos forem criados em tela, pois ele é um evento a partir de um clique de um botão.

//Sempre que passarmos algum outro hook dentro do nosso useMemo ou useCallBack, precisamos passá-lo como um array de  dependência, para não deixarmos o valor desatualizado.

//Criamos a página de detalhes esperando receber um id na rota(Route Params).