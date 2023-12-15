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

export const store = {
    _subscriber(state: StateType) {
        console.log('there is no subscriber')
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
        this._subscriber = observer
    },
    addUserPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ""
        this._subscriber(this._state)
    },
    updateNewPostText(updatePostText: string) {
        this._state.profilePage.newPostText = updatePostText
        this._subscriber(this._state)
    }
}