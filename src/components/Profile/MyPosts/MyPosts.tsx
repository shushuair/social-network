import React from "react"
import s from "./MyPosts.module.css"
import { PostType, UnitedType } from "../../../redux/store"

import { Post } from "components/Profile/MyPosts/Post/Post"

export type MyPostsPropsType = {
  posts: PostType[]
  addPost: ()=>void
  onChangePostText: (newPostElement:string)=>void
  newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(post =>
    <Post id={post.id} message={post.message} likeCount={post.likeCount} />)

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPostHandler = () => {
    props.addPost()
  }

  const onChangePostText = () => {
    if (newPostElement.current) props.onChangePostText(newPostElement.current.value)
  }

  return (
    <div className={s.content}>
      My posts
      <h3>My posts</h3>
      <div className={s.newPostWrap}>
        <textarea value={props.newPostText} onChange={onChangePostText} ref={newPostElement}></textarea>
        <button onClick={addPostHandler}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}