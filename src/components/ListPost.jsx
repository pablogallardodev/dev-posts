import { useEffect, useState } from 'react'
import { addReaction, getAllPosts } from '../Firebase/database'
import Post from './Post'

const ListPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts()
      setPosts(posts)
    }

    return () => {
      getPosts()
    }
  }, [])

  const handleReaction = async (key) => {
    await addReaction(key)
    const posts = await getAllPosts()
    setPosts(posts)
  }

  return posts.map(post => <Post key={post.key} post={post} handleReaction={handleReaction} />)
}

export default ListPost
