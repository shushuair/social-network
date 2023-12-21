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

export type StoreType = {
    _callSubscriber: (state:StateType)=>void
    _state: StateType
    getState: ()=>StateType
    subscribe: (observer:(state:StateType)=>void)=>void
    dispatch: (action: UnitedType)=>void
}

export const store = {
    _callSubscriber(state: StateType) {
        console.log('there is no observer')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi there, what's up?", likeCount: 5},
                {id: 1, message: "I can not talk anymore", likeCount: 8},
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
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
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    subscribe (observer: (state: StateType)=>void){
        this._callSubscriber = observer
    },
    dispatch(action: UnitedType) {
        if(action.type === "ADD-POST"){
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-POST"){
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(this._state)
        }   else if (action.type === 'NEW-MESSAGE') {
            let newMessage = {id: 4 , message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.payload.updateMessageText
            this._callSubscriber(this._state)
        }
    }
}

export type UnitedType = AddPostACType | UpdatePostACType | NewMessageACType | UpdateMessageACType

export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = ()=>{
    return {
        type: "ADD-POST"
    } as const
}

export type UpdatePostACType = ReturnType<typeof updatePostAC>
export const updatePostAC = (newText: string)=>{
    return {
        type: "UPDATE-POST",
        payload: {
            newText
        }
    } as const
}

export type NewMessageACType = ReturnType<typeof newMessageAC>
export const newMessageAC = () => {
    return {
        type: 'NEW-MESSAGE',
    } as const
}

export type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export const updateMessageAC = (updateMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        payload: {
            updateMessageText
        }
    } as const
}