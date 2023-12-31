import React from 'react'
import MyButton from './UI/button/MyButton'
import { Routes, Route, useParams } from 'react-router-dom'

const PostItem = ({ post, remove }) => {
	const { id, title, body } = post
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>
					{post.id}.{title}
				</strong>
				<div>{body}</div>
			</div>
			<div className='post__btns'>
				<MyButton
					onClick={() => {
						window.location.assign('http://localhost:3000/1111')
					}}
				>
					Открыть
				</MyButton>
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem
