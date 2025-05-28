import styles from '../styles/post.module.css'
import heart from '../img/icons/heart.svg'
import comments from '../img/icons/comments.svg'
import Comments from './Comments'
import { useState } from 'react'

const Post = ({ post, handleReaction }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    <>
      <article key={post.id} className={styles.containerPost}>
        <section className={styles.sectionTitle}>
          <p>{post.user_name}</p>
          <p>{post.creation_date}</p>
        </section>

        <p className={post.post_img ? styles.message : styles.textImage}>{post.post_message}</p>

        {post.post_img && <img src={post.post_img} alt={post.id} />}

        <div className={styles.containerButtons}>
          <button onClick={() => handleReaction(post.key)} className={post.isReaction ? styles.reaction : null}><img src={heart} width={16} />{post.reactions.length}</button>
          <button onClick={() => setShowComments(true)}><img src={comments} width={16} />{post.comments.length}</button>
        </div>
      </article>
      <Comments showCommets={showComments} setShowComments={setShowComments}>
        <section className={styles.sectionTitle}>
          <p>{post.user_name}</p>
          <p>{post.creation_date}</p>
        </section>

        <p className={post.post_img ? styles.message : styles.textImage}>{post.post_message}</p>

        {post.post_img && <img src={post.post_img} alt={post.id} />}
      </Comments>
    </>
  )
}

export default Post
