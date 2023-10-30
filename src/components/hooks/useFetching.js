import { useState } from 'react'

export const useFetching = callback => {
	const [isLoadind, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
		} catch (e) {
			setError(e.massage)
		} finally {
			setIsLoading(false)
		}
	}
    return [fetching,isLoadind,error]
}
