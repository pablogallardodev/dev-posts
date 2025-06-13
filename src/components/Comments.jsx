import { useState } from 'react'
import styles from '../styles/comments.module.css'
import { Send, Xmark } from './Icons'

const Comments = ({ showCommets, setShowComments, children }) => {
  const [comment, setComment] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(comment)
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
