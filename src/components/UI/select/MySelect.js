import React from 'react'

const MySelect = ({ option, defaultValue, onChange, value }) => {
	return (
		<select value={value} onChange={e => onChange(e.target.value)}>
			<option disabled value=''>
				{defaultValue}
			</option>
			{option.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default MySelect
