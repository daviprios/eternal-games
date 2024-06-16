import React from 'react'

export default function Window({
	style,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			style={{ width: '100%', height: '100%', ...style }}
		>
			{children}
		</div>
	)
}
