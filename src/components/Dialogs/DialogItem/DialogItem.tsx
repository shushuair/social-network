import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogPropsType) => {

    return <NavLink to={`/dialogs/${props.id}`}><li className={s.dialogItem}>{props.name}</li></NavLink>
};