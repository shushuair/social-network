import React from "react"
import { Dialogs } from "./Dialogs"

export type DialogsPropsType = {
  store: any
}


export const DialogsContainer = (props: DialogsPropsType) => {

  const state = props.store.getState().dialogsPage


  return <Dialogs store={props.store} dialogs={state.dialogs} messages={state.messages}/>
};