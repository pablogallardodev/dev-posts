import { useEffect, useState } from 'react'
import styles from '../styles/post.module.css'
import { getAllPosts } from '../Firebase/database'
import heart from '../img/icons/heart.svg'
import comments from '../img/icons/comments.svg'

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
    <article key={post.id} className={styles.containerPost}>
      <section className={styles.sectionTitle}>
        <p>{post.user_name}</p>
        <p>{post.creation_date}</p>
      </section>
      
      <p className={post.post_img ? styles.message : styles.textImage}>{post.post_message}</p>

      {post.post_img && <img src={post.post_img} alt={post.id} />}

      <div className={styles.containerButtons}>
        <button><img src={heart} width={16}/>{post.reactions}</button>
        <button><img src={comments} width={16}/>{post.comments.length}</button>
      </div>
    </article>
  )
}

export default ListPost