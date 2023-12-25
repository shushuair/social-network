import {NewMessageACType, UpdateMessageACType} from "./dialogsReducer";
import {AddPostACType, UpdatePostACType} from "./profileReducer";

export type MessageType = {
  id: number
  message: string
}
export type DialogType = {
  id: number
  name: string
}
export type PostType = {
  id: number
  message: string
  likeCount: number
}
export type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageText: string
}
export type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type UnitedType = NewMessageACType | UpdateMessageACType | AddPostACType | UpdatePostACType

export type StoreType = {
  _callSubscriber: (state:StateType)=>void
  _state: StateType
  getState: ()=>StateType
  subscribe: (observer:(state:StateType)=>void)=>void
  dispatch: (action: UnitedType)=>void
}