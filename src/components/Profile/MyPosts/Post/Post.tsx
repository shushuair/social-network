import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    likeCount: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={s.content}>
            <div className={s.postWrap}>
                <img className={s.avatarImage} loading="lazy"
                     src={'https://d.newsweek.com/en/full/2027477/avatar-2-movie.jpg?w=1600&h=1600&q=88&f=a9c76735de5944303f821b996fd8a21c'}
                     alt={'avatar'}/>
                <p>{props.message}</p>
            </div>
            <div className={s.likeWrap}>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    )
}