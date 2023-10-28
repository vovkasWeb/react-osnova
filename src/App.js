import React, { useRef, useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

import './style/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

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

	const bodyInputRef = useRef()
	const createPost = newPost => {
		setPosts([...posts, newPost])
	}
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<Counter />
			<ClassCounter />
			<PostForm create={createPost} />
			<PostList posts={posts} remove={removePost} title={'Список технологий'} />
		</div>
	)
}

export default App
