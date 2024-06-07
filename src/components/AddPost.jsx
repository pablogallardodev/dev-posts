import { useState } from 'react'
import styles from '../styles/addpost.module.css'
import { createPost } from '../Firebase/database'

const AddPost = () => {
  const [postData, setPostData] = useState({ post_message: '' })

  const submitPost = () => {
    const post = postData

    post.id = Date.now().toLocaleString()
    post.user_name = 'Ejemplo'
    post.hashtags = []
    post.post_img = ''
    post.reactions = 0
    post.creation_date = Date.now().toLocaleString()
    post.comments = []

    console.log(post);
    createPost(post)
  }

  return (
    <section className={styles.container}>
      <textarea className={styles.txtMessage} placeholder="Comparte tu idea aquí..." value={postData.post_message} onChange={e => setPostData({ ...postData, post_message: e.target.value})}/>
      <input className={styles.file} type="file" id="file"/>
      <span><label htmlFor="file" className={styles.img}>📷 Foto/video</label></span>
      <button className={styles.btnSubmit} onClick={submitPost}>Crear Publicacion</button>
    </section>
  )
}

export default AddPost