import { useState } from 'react'
import { onSignOut } from '../Firebase/auth'
import useUsuairo from '../hooks/useUsuario'
import user from '../img/icons/user.svg'
import style from '../styles/user.module.css'

const CardUser = () => {
  const usuario = useUsuairo()
  const [showCard, setShowCard] = useState(false)

  return (
    <section className={style.container}>
      {
        usuario?.avatar
          ? <img src={usuario?.avatar} alt={usuario?.email} onClick={() => setShowCard(!showCard)} />
          : <img src={user} width={80} onClick={() => setShowCard(!showCard)} style={{ borderRadius: '0', width: '45px' }} />
      }
      <div className={style.card} style={{ display: showCard ? 'flex' : 'none' }}>
        {
          usuario?.avatar
            ? <img src={usuario?.avatar} alt={usuario?.email} />
            : <img src={user} width={80} />
        }
        <div className={style.info}>
          <span className={style.name}>{usuario?.username ? usuario?.username : 'Sin Nombre'}</span>
          <span className={style.mail}>{usuario?.email}</span>
          <button className={style.logout} onClick={onSignOut}>Cerrar sesión</button>
        </div>
      </div>
    </section>
  )
}

export default CardUser
