import styles from '../styles/addpost.module.css'

const AddPost = () => {
  return (
    <section className={styles.container}>
      <textarea className={styles.txtMessage} placeholder="Comparte tu idea aquí..."/>
      <input className={styles.file} type="file" id="file"/>
      <span><label htmlFor="file" className={styles.img}>📷 Foto/video</label></span>
      <button className={styles.btnSubmit}>Crear Publicacion</button>
    </section>
  )
}

export default AddPost