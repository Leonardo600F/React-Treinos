import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("../../components/header/header"));

export default function Home() {

    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Header nome='Leonardo Marin Zem' age={22} active={true}/>
        </Suspense>
    )
}

//O lazy é um método e portanto precisamos armazená-lo dentro de uma const pra executá-lo. Nos parâmetros do lazy passaremos um callback, e esse callback passará a importação do nosso componente desejado, neste caso o componente Header:
//const Header = lazy(() => import("../../components/header/header"));

//Enquanto nosso componente é carregado, o Suspense nos exibirá um JSX, através do método fallback. Exemplo:
//<Suspense fallback={<div>Carregando...</div>} <Header nome='Leonardo Marin Zem' age={22} active={true} /> </Suspense>