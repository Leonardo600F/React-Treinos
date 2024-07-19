import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function RoutesExamples() {
    const produtos = [
        {nome: 'Batedeira', id: 20},
        {nome:'Ventilador', id: 22},
        {nome: 'Computador', id: 30}
    ]

    const location = useLocation();
    console.log(location) //Mostrará todas as informações da nossa rota.

    return (
        <div>
            {produtos.map((produto) => (
                <Link to={`detalhes/${produto.id}`}>
                <span style={{ display: "block"}}>{produto.nome}</span>
                </Link>

            ))}
        </div>
    )
}

//Temos uma array chamada produtos, que está passando três objetos, e estes objetos são os produtos juntos com seus respectivos id.

//Dentro do return temos uma chave englobando a const produtos, junto com o iterador ".map". Passaremos como propriedade o "produto", que servirá para chamar as chaves dos três objetos.

//Logo em seguida, utilizaremos o Link da lib do react-router-dom, para direcionarmos os usuários que clicarem em qualquer um dos produtos. Dentro do Link terá uma template String que passará a pasta detalhes, e o id do produto que será requisitado na requisição.

//Passaremos primeiro a pasta 'detalhes' e logo após iremos concatenar a chave "id". Quem passará o id no Link é o parâmetro "produto", por isso que dentro do cifrão e chave está digitado "produto.id".

//Teremos um span que passará os nomes dos produtos, juntamente com uma estilização dentro do componente, e está estilização em específico fará os nomes dos itens ficarem um abaixo do outro(display: 'block').

//Quando clicamos em cada um dos três itens acima, vemos na nossa URL que temos diferentes ids. Entretanto, o caminho continua o mesmo, que seria a pasta com o arquivo "Detalhes".

//Como estamos passando que estamos aguardando o parâmetro id, temos que tomar cuidado para não deixar a URL sem o parâmetro. Exemplo do que não fazer:
//localhost:3000/detalhes  -->Aqui sempre terá que passar o id.
//localhost:3000/detalhes/22 --> Agora está totalmente certo, e portanto, não ocasionará em uma tela branca.

//o useLocation serve para vermos as informações da nossa rota, e nos retornará algumas informações, sendo as mais importantes "pathname" e "search":

//pathname --> É a pasta aonde armazena o arquivo que contém a função sendo exportada.

//search --> Aqui é por onde podemos passar os Query Params, se assim desejarmos.