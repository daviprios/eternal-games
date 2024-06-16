import { useDrag } from 'react-dnd'
import { draggable } from './draggableTypes'

export default function WindowShortcut({
	children
}: {
	children: React.ReactNode
}) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: draggable.window,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	}))

	return (
		<button
			ref={drag}
			style={{
				border: 'solid 1px white',
				width: 'fit-content',
				padding: '5px',
				backgroundColor: isDragging ? 'purple' : ''
			}}
		>
			{children}
		</button>
	)
}
