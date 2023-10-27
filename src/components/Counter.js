import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	function ss(i) {
		setCount(count + i)
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => ss(1)}>+1</button>
			<button onClick={() => ss(-1)}>-1</button>
		</div>
	)
}

export default Counter
