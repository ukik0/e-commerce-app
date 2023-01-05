import React from 'react'
import ContentLoader from 'react-content-loader'

const UserInfoSkeleton = (props: any) => (
	<ContentLoader
		speed={3}
		width={150}
		height={40}
		viewBox="0 0 260 60"
		backgroundColor="#858585"
		foregroundColor="#d9d9d9"
		{...props}
	>
		<circle cx="26" cy="28" r="25" />
		<rect x="57" y="1" rx="9" ry="9" width="143" height="25" />
		<rect x="57" y="31" rx="12" ry="12" width="143" height="25" />
	</ContentLoader>
)

export default UserInfoSkeleton