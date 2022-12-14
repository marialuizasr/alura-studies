import React, { useState } from "react";
import Item from "./Item";
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefa'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Props) { // ou Array<ITarefa>
    return (
        <aside className={ style.listaTarefas }>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                   <Item 
                   selecionaTarefa={ selecionaTarefa }
                   key={ item.id }
                    { ...item }
                    /*
                    ou
                    { item.tarefa }
                    { item.tempo }
                    */
                   />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;