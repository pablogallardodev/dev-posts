import { useEffect, useState } from 'react'
import { onChangeUser } from '../Firebase/auth'

const useUsuairo = () => {
  const [usuario, setUsuario] = useState(undefined)

  useEffect(() => {
    onChangeUser(setUsuario)
  }, [])

  return usuario
}

export default useUsuairo
