import React, { useRef } from "react"
import s from "./MyPosts.module.css"
import { addPostAC, PostType, UnitedType, updatePostAC } from "redux/state"
import { Post } from "components/Profile/MyPosts/Post/Post"

export type MyPostsPropsType = {
  posts: PostType[]
  dispatch: (action: UnitedType) => void
  newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(post =>
    <Post id={post.id} message={post.message} likeCount={post.likeCount} />)

  const newPostElement = React.createRef<HTMLTextAreaElement>()

  const addPostHandler = () => {
    if (newPostElement.current) props.dispatch(addPostAC())
  }

  const onChangePostText = () => {
    if (newPostElement.current) props.dispatch(updatePostAC(newPostElement.current.value))
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