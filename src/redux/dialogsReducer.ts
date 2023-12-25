import { DialogsPageType, UnitedType } from "./store"

const initialState: DialogsPageType = {
  dialogs: [
    {id: 1, name: "James"},
    {id: 2, name: "Darren"},
    {id: 3, name: "Jennifer"},
    {id: 4, name: "Ola"},
    {id: 5, name: "Mal"},
  ],
  messages: [
    {id: 1, message: "What are you talking about?"},
    {id: 2, message: "Never mind, just forget it"},
    {id: 3, message: "No worries, take care"},
  ],
  newMessageText: ""
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: UnitedType): DialogsPageType => {
  switch (action.type) {
    case "NEW-MESSAGE": {
      let newMessage = { id: 4, message: state.newMessageText }
      state.messages.push(newMessage)
      state.newMessageText = ""
      return state
    }
    case "UPDATE-MESSAGE": {
      state.newMessageText = action.payload.updateMessageText
      return state

    }
    default:
      return state
  }
}


export type NewMessageACType = ReturnType<typeof newMessageAC>
export const newMessageAC = () => {
  return {
    type: "NEW-MESSAGE"
  } as const
}

export type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export const updateMessageAC = (updateMessageText: string) => {
  return {
    type: "UPDATE-MESSAGE",
    payload: {
      updateMessageText
    }
  } as const
}