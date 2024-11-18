import styles from '../styles/home.module.css'
import AddPost from './AddPost'
import CardUser from './CardUser'
import ListPost from './ListPost'

const Home = () => {
  
  return (
    <div className={styles.container}>
      <nav>
        <CardUser />
      </nav>
      <section>
        <AddPost />
        <ListPost />
      </section>
    </div>
  )
}

export default Home