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
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionType = {
    type: string
    [key: string]: any
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
            ]
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
        } else if (action.type === "UPDATE-POST"){
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(this._state)
        }
    }
}

export type UnitedType = AddPostACType | UpdatePostACType

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