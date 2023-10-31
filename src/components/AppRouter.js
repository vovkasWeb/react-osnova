import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from './PostIdPage'
import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'
const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext)
	console.log(isAuth)

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			{isAuth ? (
				<Routes>
					{privateRoutes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={<route.component />}
							exact={route.exact}
						/>
					))}
				</Routes>
			) : null}

			<Routes>
				{publicRoutes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={<route.component />}
						exact={route.exact}
					/>
				))}
			</Routes>
		</>
	)
}

export default AppRouter
