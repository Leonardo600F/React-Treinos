import React from "react";
import './styles.css';

//function Button(props) {
    //console.log(props) //Iremos ver que este props será um objeto.
 //return (
        //<div className="containerButton">
        //<button className={props.active ? 'button' : 'disabledButton'}>{props.name}</button>
        //<span>Seus dados estão a salvo conosco</span>

        //</div>
    //)
//}

//export default Button;

//O parâmetro em React são simplesmente chamados de propriedades.

//Receberemos agora um props.active, que fará com que os botões com active true e false terem outras cores.

//Através do nosso parâmetro props, estamos passando o active, que está executando o nosso operador ternário, que indicará que todos os botões com o boolean true sejam botões normais, e o 'disabledButton' seja um botão desabilitado.

//Podemos então desestruturar este objeto, deixando o código mais limpo:

export default function Button({name, active, onClick}) {

    return (
        <div className='containerButton'>
            <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}


//Aqui faremos o onClick funcionar. Não podemos passar o onClick direto na tag que está no App.js, pois ele é um componente e não um JSX.

//Como definimos aqui o onClick, agora podemos passá-lo dentro do botão que está lá no App.js.

//Estamos chamando o onClick, e dentro dele estamos passando a função. A função poderia ser qualquer outro nome, como "evento".

//Como estamos passando o onClick como propriedade lá no App.js, podemos alterar o valor dele aqui. Agora criamos um botão que toda vez que clicamos ele vai para o número 20.