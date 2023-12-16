import React from "react"
import s from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts"
import { ProfilePageType, UnitedType } from "redux/state"
import { ProfileInfo } from "components/Profile/ProfileInfo/ProfileInfo"

export type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: UnitedType) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts  newPostText={props.profilePage.newPostText}
               posts={props.profilePage.posts} dispatch={props.dispatch} />
    </div>
  )
}