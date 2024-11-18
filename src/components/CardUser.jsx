import { onSignOut } from '../Firebase/auth'
import useUsuairo from "../hooks/useUsuario"
import user from '../img/icons/user.svg'
import style from '../styles/user.module.css'

const CardUser = () => {
  const usuario = useUsuairo();
  return (
    <div className={style.container}>
      {
        usuario?.avatar
        ? <img src={usuario?.avatar} alt={usuario?.email} />
        : <img src={user} width={80} />
      }
      <div className={style.info}>
        <span className={style.name}>{usuario?.username ? usuario?.username : 'Sin Nombre'}</span>
        <span className={style.mail}>{usuario?.email}</span>
        <button className={style.logout} onClick={ onSignOut }>Cerrar sesión</button>
      </div>
    </div>
  )
}

export default CardUser