import React from 'react'
import Post from './Post'


const Feed = ({posts}) => {
  return (
      <>
        {posts.map(searchResult =>(
            <Post key={searchResult.id} post={searchResult}/>
        ))}
      </>
  )
}

export default Feed
