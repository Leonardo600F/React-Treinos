import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PropsExample( {name} ) {
    const navigate = useNavigate();

    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'>
                    <li style={{color: 'black'}}>Home</li>
                    </Link>

                    <Link to='/fotos'>
                    <li style={{color: 'black'}}>Fotos</li>
                    </Link>
                    
                    <Link to='/contato'>
                    <li style={{color: 'black'}}>Contato</li>
                    </Link>
                    <li onClick={() => navigate('contato')}>Login</li>
                    <li>{name}</li>
                    

                </ul>
            </nav>
        </div>
    )
}

PropsExample.propTypes = {
    name: PropTypes.string.isRequired
}

//Quando um parâmetro de componente for diferente de uma string a forma que passamos muda também. Exemplo:
//age={22}, active={true}

//Iremos fazer uma modificação de propósito no name, e passaremos um number. Podemos notar que a aplicação rodará normal, e o PropTypes impedirá a aplicação de rodar normal caso o parâmetro passado seja diferente do esperado.

//O propTypes deve ser criado fora do nosso return, de preferência no início ou no final do código, mas nunca no meio.

//Chamaremos o componente que desejamos criar uma propTypes e logo depois chamaremos o método e o atribuiremos a uma chave:
//PropsExample.propTypes = {}

//Dentro do propTypes indicaremos que tipo de valor tal chave deverá esperar:
//nome: PropTypes.string --> Estamos indicando que nossa chave nome está esperando um valor string.

//No nosso console, aparecerá um aviso de que a nossa chave está esperando um valor diferente de number, que será o string neste caso. Agora deixaremos a chave nome com o valor normal novamente.

//Podemos deixar a propriedade como obrigatória:
//PropsExample.propTypes = {name: PropTypes.string.isRequired}

//Não utilizaremos com frequência o PropTypes, pois o TypeScript já fará o que o mesmo faz.