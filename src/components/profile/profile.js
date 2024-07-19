import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export default function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'Dados do usuário' : 'Faça seu login para ter acesso às informações'}  
        </div>
    )
}