import { ProfilePageType, UnitedType } from "./redux-store"

const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: "Hello, my name is Ilya", likeCount: 15 },
    { id: 2, message: "Im busy", likeCount: 20 }
  ],
  newPostText: "it-kamasutra"
}

export const profileReducer = (state: ProfilePageType = initialState, action: UnitedType): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = { id: 3, message: state.newPostText, likeCount: 0 }
      state.newPostText = ""
      return {...state, posts: [newPost,...state.posts]}
    }
    case "UPDATE-POST": {
      state.newPostText = action.payload.newText
      return state
    }


    default:
      return state
  }
}


export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
  return {
    type: "ADD-POST"
  } as const
}

export type UpdatePostACType = ReturnType<typeof updatePostAC>
export const updatePostAC = (newText: string) => {
  return {
    type: "UPDATE-POST",
    payload: {
      newText
    }
  } as const
}