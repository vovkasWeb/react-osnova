import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './hooks/useFetching'
import PostService from '../API/PostServise'
import Loader from './UI/Loader/Loader'

const PostIdPage = () => {
	const params = useParams()
	console.log(params)
    const [post,setPost] = useState({});
	const [fetchePostsByid, isLoading, error] = useFetching(async(id) => {
		const response = await PostService.getById(id)
        setPost(response.data);
	})
	useEffect(() => {
        fetchePostsByid(params.id)
    },[])
	return (
		<div>
			<h1> Строница поста {params.id}</h1>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{post.id},{post.title}
				</div>
			)}
		</div>
	)
}

export default PostIdPage
