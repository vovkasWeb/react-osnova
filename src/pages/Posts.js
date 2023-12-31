import React, { useMemo, useRef, useState, useEffect } from 'react'
import Counter from '../components/Counter'
import ClassCounter from '../components/ClassCounter'

import '../style/App.css'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/Mymodal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import { usePosts } from '../components/hooks/usePosts'
import PostService from '../API/PostServise'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../components/hooks/useFetching'
import { getPageCount, getPagesArray } from '../utils/pages'

function Posts() {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('text in input')
	const [modal, setModal] = useState(false)
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [posts, setPosts] = useState([])
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	let pagesArray = getPagesArray(totalPages)

	const [fetchePosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	function ss(i) {
		setLikes(likes + i)
	}
	useEffect(() => {
		fetchePosts()
	}, [page])

	const changePage = page => {
		setPage(page)
	}

	// const bodyInputRef = useRef()
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
			{postError && <h1>Произошла ошибка ${postError}</h1>}
			{isPostsLoading ? (
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
				>
					<Loader />
				</div>
			) : (
				<PostList
					posts={sortedAndSearchedPosts}
					remove={removePost}
					title={'Список технологий'}
				/>
			)}
			<div className='page__wrapper'>
				{pagesArray.map(p => (
					<span
						className={page === p ? 'page page__current' : 'page'}
						key={p}
						onClick={() => changePage(p)}
					>
						{p}
					</span>
				))}
			</div>
		</div>
	)
}

export default Posts
