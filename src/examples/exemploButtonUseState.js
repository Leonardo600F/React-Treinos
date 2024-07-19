import React from "react";
import Button from "../components/button/button";
import { useState } from "react";

export default function exemploButtonUseState() {
    const [carregando, setCarregando] = useState(true);

    return(
        <div>
            {carregando ? 'Carregando' : <Button name='Botão 1' active />}
            <button onClick={() => setCarregando(!carregando)}>{carregando ?'Carregar site' : 'Voltar para site'}</button>
        </div>
    )
}

