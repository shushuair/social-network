import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType} from "redux/state";
import {ProfileInfo} from "components/Profile/ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
    state: ProfilePageType
    addUserPost: (newPostText: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addUserPost={props.addUserPost}/>
        </div>
    )
}