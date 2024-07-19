import React, { lazy, Suspense, useState } from "react";

const Header = lazy(() => import("../../components/header/header"));

export default function Home() {
    const[loading, setLoading] = useState(false);

    return (
            <Header loading={loading} nome='Leonardo Marin Zem' age={22} active={true}/>
    )
}

//Para inserirmos o componente de Header no Memo, precisamos ir até o arquivo do componente, e envolver a exportação do componente com o método Memo. Exemplo:
//export default memo(Header); --> Isto aqui está sendo feito na página do componente Header.