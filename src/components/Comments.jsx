import styles from '../styles/comments.module.css'

const Comments = ({ showCommets, setShowComments, children }) => {
  return (
    <div className={styles.container} style={showCommets ? { display: 'flex' } : { display: 'none' }} onClick={() => setShowComments(false)}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Comments
