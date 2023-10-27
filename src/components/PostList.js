import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts,title}) => {
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{title}</h2>
			{posts.map(post => (
				<PostItem key={post.id} post={post} />
			))}
		</>
	)
}

export default PostList
