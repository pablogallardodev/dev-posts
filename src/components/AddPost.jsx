import { useState } from 'react'
import styles from '../styles/addpost.module.css'
import { createPost } from '../Firebase/database'
import useUsuairo from '../hooks/useUsuario'

const AddPost = () => {
  const [postData, setPostData] = useState({ post_message: '', post_img: '' })
  const usuario = useUsuairo()

  const handleImage = (e) => {
    e.preventDefault();

    var file = e.target.files[0]
    var reader = new FileReader()
    reader.onloadend = function() {
      setPostData({ ...postData, post_img: `${reader.result}`})
    }

    reader.readAsDataURL(file);
  }

  const submitPost = () => {
    const post = postData
    const created = new Date()
    const date = `${created.getDate()}/${created.getMonth() + 1}/${created.getFullYear()}`

    post.id = crypto.randomUUID()
    post.user_name = usuario.email
    post.reactions = 0
    post.creation_date = date
    post.comments = []

    createPost(post)
    .then(result => {
      console.log(result.id)
      setPostData({ post_message: '', post_img: '' })
    })
    .catch(error => console.log(error))
  }

  return (
    <section className={styles.container}>
      <textarea className={styles.txtMessage} placeholder="Comparte tu idea aquí..." value={postData.post_message} onChange={e => setPostData({ ...postData, post_message: e.target.value})}/>
      { postData.post_img && <img src={postData.post_img} alt="post imagen" className={styles.imgPost}/>}
      <input className={styles.file} type="file" id="file" onChange={handleImage}/>
      <span><label htmlFor="file" className={styles.img}>📷 Foto/video</label></span>
      <button className={styles.btnSubmit} onClick={submitPost}>Crear Publicacion</button>
    </section>
  )
}

export default AddPost