import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
	}
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map(post => (
					<CSSTransition key={post.id} timeout={500} classNames='post'>
						<PostItem  post={post} remove={remove} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</>
	)
}

export default PostList
