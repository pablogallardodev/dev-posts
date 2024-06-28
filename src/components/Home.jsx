import { onSignOut } from '../Firebase/auth'
import useUsuairo from '../hooks/useUsuario'
import posts from '../Firebase/post.json'
import styles from '../styles/home.module.css'
import AddPost from './AddPost'

const Home = () => {
  const usuario = useUsuairo()
  
  return (
    <div className={styles.container}>
      <nav>
        <h1>{usuario?.email}</h1>
        <button onClick={ onSignOut }>Cerrar sesión</button>
      </nav>
      <div>
        <AddPost />
        {
          posts.map( post =>
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
      </div>
    </div>
  )
}

export default Home