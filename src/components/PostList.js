import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
	}
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{title}</h2>
			{posts.map(post => (
				<PostItem key={post.id} post={post} remove={remove} />
			))}
		</>
	)
}

export default PostList
