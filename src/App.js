import React, { useMemo, useRef, useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'

import './style/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'
import PostFilter from './components/PostFilter'
import MyModal from './components/Mymodal/MyModal'

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
const [filter,setFilter] = useState({sort:'',query: ''})

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(()=>{
return sortedPosts.filter(post =>
	post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()))
},[filter.query,sortedPosts])
	return (
		<div className='App'>
      <MyModal visible={true}>
      <PostForm create={createPost} />
      </MyModal>
			<Counter />
			<ClassCounter />
			
			<PostFilter filter={filter} setFilter={setFilter}/>
				<PostList
					posts={sortedAndSearchedPosts}
					remove={removePost}
					title={'Список технологий'}
				/>
		
		</div>
	)
}

export default App
