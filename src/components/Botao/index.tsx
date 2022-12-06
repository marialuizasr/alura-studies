import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component <{ 
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined }> { // '?' quer dizer que type eh opcional
    render() {
        const { type = "button" } = this.props; // diz que se nao tiver um type, type = 'button' por padrao
        return (
            <button type={ type } className={ style.botao }>
                { this.props.texto }
            </button>
        )
    }
}

export default Botao;