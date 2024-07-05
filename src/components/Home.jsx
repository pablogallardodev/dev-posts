import { onSignOut } from '../Firebase/auth'
import useUsuairo from '../hooks/useUsuario'
import styles from '../styles/home.module.css'
import AddPost from './AddPost'
import ListPost from './ListPost'

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
        <ListPost />
      </div>
    </div>
  )
}

export default Home