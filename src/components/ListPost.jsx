import { useEffect, useState } from 'react'
import { addReaction, getAllPosts } from '../Firebase/database'
import Post from './Post'
import useUsuairo from '../hooks/useUsuario'

const ListPost = () => {
  const usuario = useUsuairo()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => await getAllPosts(setPosts)

    return () => {
      getPosts()
    }
  }, [usuario])

  const handleReaction = async (key) => await addReaction(key)

  return posts.map(post => <Post key={post.key} post={post} handleReaction={handleReaction} />)
}

export default ListPost
