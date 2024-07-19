import React from 'react';
import Button from '../components/button/button';


function exemploEvento() {
  
  function Evento() {
    alert('O evento foi disparado')
  }

  window.addEventListener('scroll', () => console.log('Evento aconteceu'))

  return (
    <div style={{height: '200vh'}}>
    <Header/>
    <Button onClick={() => Evento()} name='Botão 1' active={true}/>
    <Button name='Botão 2' active={false}/>
    <Button name='Botão 3' active={false}/>
    <span onClick={() => Evento()}>Evento</span>
    </div>
  )
}

export default ExemploEvento;

//Parece que estamos passando atributos de um objeto, mas o name e o active são as propriedades destes componentes.

//Quando há somente o nome sem o boolean ele entende que a função será um true. E se apagarmos todo o active ele reconhecerá como um boolean de valor "false".

//window.addEventListener --> É a maneira que vamos adicionar um evento ao Javascript.  Ele também é um método, sendo o scroll o primeiro parâmetro a ser passado. O segundo parâmetro é a função/callback que vai ser disparado.

//Utilizaremos estes eventos que não são importados dentro do nosso JSX com o window.AddEventeListener, já quando está dentro do JSX iremos usar normalmente o onClick. Lembrando que o onClick está armazenando o parâmetro evento, que está executando o alert.