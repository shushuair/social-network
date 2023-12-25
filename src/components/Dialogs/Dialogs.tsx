import React from "react"
import s from "./Dialogs.module.css"
import { StoreType, UnitedType } from "../../redux/store"

import { DialogItem } from "components/Dialogs/DialogItem/DialogItem"
import { Message } from "components/Dialogs/Message/Message"
import { MessageSender } from "./Message/MessageSender/MessageSender"


export type DialogsPropsType = {
  store: StoreType
  dispatch: (action: UnitedType) => void
}
export const Dialogs = (props: DialogsPropsType) => {

  const state = props.store.getState().dialogsPage

  const dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
  const messagesElements = state.messages.map(message => <Message id={message.id} message={message.message} />)

  return (
    <div className={s.dialogsWrapperContent}>
      <div className={s.dialogWrapper}>
        <ul className={s.dialogList}>
          {dialogsElements}
        </ul>
      </div>
      <div className={s.messagesWrapper}>
        <ul className={s.messagesList}>
          {messagesElements}
        </ul>
        <MessageSender state={state} dispatch={props.dispatch}/>
      </div>

    </div>
  )
}

