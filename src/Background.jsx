import React from 'react'

const Background = ({ backgroundData, children, innerWidth }) => {
	// console.log(backgroundData)
	return (
		<div
			className='main-background'
			style={{
				backgroundImage: `url(${backgroundData.image == 'none' ? '/images/day/image_1/png' : backgroundData.image})`,
				backgroundPositionY: `${backgroundData.y / 1920 * innerWidth}`
			}}
		>
			{children}
		</div>
	)
}

export default Background