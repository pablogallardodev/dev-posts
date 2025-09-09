import styles from '../styles/home.module.css'
import AddPost from './AddPost'
import CardUser from './CardUser'
import ListPost from './ListPost'

const Home = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <CardUser />
      </nav>
      <section className={styles.body}>
        <AddPost />
        <ListPost />
      </section>
    </div>
  )
}

export default Home
