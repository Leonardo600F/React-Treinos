import React from "react";

function map() {
    const lista = [
        {nome: 'Leonardo', aluno: true},
        {nome: 'Josnei', aluno: true},
        {nome: 'Josnéia', aluno: false},
        {nome: 'Cleiton', aluno: false},
        {nome: 'Cremilda', aluno: true},
    ]
    return (

        <div>
            {lista.map((aluno) => {
                <>
            <div>{aluno.nome}</div>

            <div>Aluno:
            <span style={aluno.aluno ?{color: 'green'} : {color: 'red'}}>
            {aluno.aluno ? 'Sim' : 'Não'}
            </span>
            </div>
            </>
        })}
        </div>
        
    )
}

//O map está passando por todos os itens da nossa array, e em cada item da nossa array ele está criando um elemento JSX. E em cada item ele está adicionando o nome do nosso aluno.

//Adicionamos um React Fragment dentro do nosso map, pois se tivermos o map sendo executado o projeto identifica como um retorno.

//Estamos fazendo uma verificação para saber qual dos nomes da lista são alunos, utilizando o operador ternário.

//Estilizando --> Iremos deixar em verde o 'Sim' e em vermelho o 'Não', apenas uma estilização básica.

//Podemos utilizar CSS no nosso código JSX chamando a palavra reservada "style" dentro da div. Exemplo:
//style={{color: 'blue'}}

//Para não deixar tanto o texto dos nomes dos alunos, quanto o status em verde e vermelho, adicionaremos uma div, e colocaremos o código em um span que ficará dentro desta div.

//O código de verificação ficará assim:

//<div> Aluno :
//<span style={{aluno.aluno ? {color: 'green'} : {color: 'red'}}>
//{aluno.aluno ? 'Sim' : 'Não'}
//</span>
//</div>