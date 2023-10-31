import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Main from './pages/Main'
import './style/App.css'
import Navbar from './components/UI/Navbar/Navbar'
import Error from './pages/Error'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setLoading] = useState(true)
	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setLoading(false)
	}, [])
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
