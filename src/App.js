import React, { useMemo, useRef, useState, useEffect } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

import './style/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'
import PostFilter from './components/PostFilter'
import MyModal from './components/Mymodal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './components/hooks/usePosts'
import axios from 'axios'
import PostService from './API/PostServise'
import Loader from './components/UI/Loader/Loader'

function App() {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('text in input')
	const [modal, setModal] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [posts, setPosts] = useState([])
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [isPostsLoading, setIsPostsLoading] = useState(false)
	function ss(i) {
		setLikes(likes + i)
	}
	useEffect(() => {
		fetchePosts()
	}, [])

	async function fetchePosts() {
		setIsPostsLoading(true)
		setTimeout(async () => {
			const posts = await PostService.getAll()
			setPosts(posts)
			setIsPostsLoading(false)
		}, 1000)
	}

	const bodyInputRef = useRef()
	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<button onClick={fetchePosts}>Get Post</button>
			<MyButton style={{ marginTop: '30' }} onClick={() => setModal(true)}>
				Создать пользователя
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<Counter />
			<ClassCounter />

			<PostFilter filter={filter} setFilter={setFilter} />
			{isPostsLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center',marginTop: 50 }}>
					<Loader />
				</div>
			) : (
				<PostList
					posts={sortedAndSearchedPosts}
					remove={removePost}
					title={'Список технологий'}
				/>
			)}
		</div>
	)
}

export default App
