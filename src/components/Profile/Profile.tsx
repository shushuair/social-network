import React from "react"
import s from "./Profile.module.css"
import { MyPosts } from "./MyPosts/MyPosts"
import {ProfilePageType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "components/Profile/ProfileInfo/ProfileInfo"

export type ProfilePropsType = {
  store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  )
}