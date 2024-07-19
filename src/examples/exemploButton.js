import React from "react";

export default function exemploButton({name, active, onClick}) {

    return (
        <div className='containerButton'>
            <button onClick={onClick} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}