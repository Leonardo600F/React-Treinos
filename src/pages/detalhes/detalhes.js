import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes(){
    
    const params = useParams();
    console.log(params) //Exibirá os parâmetros da rota, que é o id.

    useEffect(() => {
        
    }, []);

    return(
        <div>
            Detalhes
        </div>
    )
}