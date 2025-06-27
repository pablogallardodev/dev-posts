import { useState } from 'react'
import styles from '../styles/comments.module.css'
import { Send, Xmark } from './Icons'
import { saveComment } from '../Firebase/database'

const Comments = ({ showCommets, setShowComments, keyPost, comments, children }) => {
  const [comment, setComment] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (comment === '' || comment === null) return

    saveComment(keyPost, comment)
    setComment('')
  }

  const onClose = () => {
    setShowComments(false)
    setComment('')
  }

  return (
    <div className={styles.container} style={showCommets ? { display: 'flex' } : { display: 'none' }}>
      <div className={styles.content}>

        <section className={styles.containerIcon}>
          <button onClick={onClose} className={styles.closeButton} title='Cerrar'>
            <Xmark />
          </button>
        </section>

        {children}

        <section className={styles.commentContainer}>
          {comments.length > 0
            ? comments.map((c, key) =>
              <div key={key} className={styles.comment}>
                <b>{c.user} - {c.date}</b>
                <p>{c.comment}</p>
              </div>
            )
            : <p className={styles.noComment}>Todavía no hay comentarios.</p>}
        </section>

        <form onSubmit={onSubmit} className={styles.formComment}>
          <input type='text' placeholder='Escribe un comentario' value={comment} onChange={(e) => setComment(e.target.value)} className={styles.input} />
          <section className={styles.containerIcon}>
            <button className={styles.sendButton} title='Enviar comentario' disabled={comment === ''}>
              <Send />
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Comments
