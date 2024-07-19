import React, { useState, useMemo, useCallback } from 'react';
import Button from './components/button/button';

export default function memoCallBack() {

  const [carregando, setCarregando] = useState(true);
  const [contador, setContador] = useState(0);

  const callBack = useCallback(() => {
    console.log('Qualquer coisa')
  },[])

  const valorMemorizado = useMemo(() => {
    return "Qualquer coisa"
  }, []);  

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
    </div>
  )
}