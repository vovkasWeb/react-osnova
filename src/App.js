import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Routes, Route, Link,BrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Main from './pages/Main'
import './style/App.css'
import Navbar from './components/UI/Navbar/Navbar'
import Error from './pages/Error'
import AppRouter from './components/AppRouter'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter/>
		</BrowserRouter>
	)
}

export default App
