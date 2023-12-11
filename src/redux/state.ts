import {rerenderEntireTree} from "render";

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
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi there, what's up?", likeCount: 5},
            {id: 1, message: "I can not talk anymore", likeCount: 8},
        ],
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
}

export const addUserPost = (newPostText: string) => {
    let newPost = {id: 3, message: newPostText, likeCount: 0}
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state)
}