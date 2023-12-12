import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "redux/state";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addUserPost: ()=> void
    updateNewPostText: (updatePostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}  newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} addUserPost={props.addUserPost}/>
        </div>
    )
}