import React, { useRef, useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

import './style/App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('text in input')
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Js', body: 'description' },
		{ id: 2, title: 'html', body: 'description0' },
		{ id: 3, title: 'css', body: 'description01' },
		{ id: 4, title: 'react', body: 'description02' },
	])
	function ss(i) {
		setLikes(likes + i)
	}
	const[post, setPost] = useState({title: '',body: ''});
	const bodyInputRef = useRef()
	const addNewPost = e => {
		e.preventDefault()
		setPosts([...posts,{...post,id:Date.now()}])
    setPost({ title: '', body: '' })
	}
	return (
		<div className='App'>
			<Counter />
			<ClassCounter />
			<form>
				<MyInput
					value={post.title}
					onChange={e => setPost({ ...post, title: e.target.value })}
					type='text'
					placeholder='Названия поста'
				/>
				<MyInput
					type='text'
					value={post.body}
					onChange={e => setPost({ ...post, body: e.target.value })}
					placeholder='Описание поста'
				/>
				<MyButton onClick={e => addNewPost(e)}>Cоздать пост</MyButton>
			</form>
			<PostList posts={posts} title={'Список технологий'} />
		</div>
	)
}

export default App
