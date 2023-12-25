import React from "react"
import s from "./DialogItem.module.css"
import { NavLink } from "react-router-dom"

export type DialogPropsType = {
  id: number
  name: string
}

export const DialogItem = (props: DialogPropsType) => {
  let path = `/dialogs/${props.id}`
  return <NavLink activeClassName={s.activeLink} style={{ width: "100%" }} to={path}>
    <li className={s.dialogItem}>{props.name}</li>
  </NavLink>

}