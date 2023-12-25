import React from "react"
import s from "./Profile.module.css"
import { MyPostsContainer } from "./MyPosts/MyPostsContainer"
import { ProfileInfo } from "components/Profile/ProfileInfo/ProfileInfo"

export type ProfilePropsType = {}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}