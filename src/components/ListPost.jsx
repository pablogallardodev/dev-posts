import { useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import { getAllPosts } from '../Firebase/database'

const ListPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts()
      setPosts(posts)
    }

    return () => {
      getPosts()
    }
  }, [])

  return posts.map( post =>
    <section key={post.id} className={styles.containerPost}>
      <p>{post.user_name} {post.creation_date}</p>
      <p>{post.post_message}</p>
      <img src={post.post_img} alt={post.id} />
      <br />
      <span>Reacciones: {post.reactions}</span>
      <br />
      <span>Comentarios: {post.comments.length}</span>
    </section>
  )
}

export default ListPost