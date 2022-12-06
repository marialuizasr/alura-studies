import React from "react";
import style from './Botao.module.scss';

interface Props {
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void  // '?' quer dizer que type eh opcional
}

function Botao({ onClick, type, texto } : Props) {
    return (
        <button onClick={onClick} type={ type } className={ style.botao }>
            { texto }
        </button>
    )
}

export default Botao;