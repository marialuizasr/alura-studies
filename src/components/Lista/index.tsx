import React, { useState } from "react";
import Item from "./Item";
import style from './Lista.module.scss';
import { ITarefa } from '../../types/tarefa'

function Lista({ tarefas }: {tarefas: ITarefa[]}) { // ou Array<ITarefa>
    return (
        <aside className={ style.listaTarefas }>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                   <Item 
                   key={ index }
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