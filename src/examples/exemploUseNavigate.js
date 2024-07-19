import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export default function Navigate() {
    const {login, setLogin} = useContext(UserContext);
    const navigate = useNavigate();

    const active = true;

    //Exemplo de navegação com condicionais:
    useEffect(() => {
        if(active){
            navigate('contato')
        } else {
            navigate('fotos')
        }
    }, [])

    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>

                    <Link to='/fotos'>
                    <li>Fotos</li>
                    </Link>
                    
                    <Link to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <li onClick={() => navigate('contato')}>Login</li>
                    

                </ul>
            </nav>
        </div>
    )
}