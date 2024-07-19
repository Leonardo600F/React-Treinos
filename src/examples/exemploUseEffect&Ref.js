import React, { useState, useEffect, useRef} from 'react';
import Button from './components/button/button';

export default function exemplosEffectRef() {

  const [carregando, setCarregando] = useState(true);
  const [contador, setContador] = useState(0);
  const video = useRef();

  useEffect(() => {
    console.log('Carregou pela primeira vez');
  }, []);

  //Segundo exemplo usando um array de dependências:
  useEffect(() => {
    console.log('Segundo exemplo')
  }, [contador])

  //Terceiro exemplo de useEffect usando o estado de exclusão:
  useEffect(()=> {
    console.log('Carregando')

    return () => {
      //Para excluírmos um componente executaremos uma função de callback dentro da chave com o devido código.
    }

  }, [carregando]);

  //Exemplo do uso do useRef:
  function callBack() {
    console.log(video.current.play())
  }

  return (
    <div>
      {carregando ?
       <span>Carregando</span> 
       :
       <div>

      <button onClick={() => setContador(contador + 1)}>Adicionar</button>
      <span>{contador}</span>
      </div>
    }
      <button onClick={() => callBack()}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
      <Button name= "Alterar valor" active onClick={setContador}/>
      <video ref={video}/>
    </div>
  )
}