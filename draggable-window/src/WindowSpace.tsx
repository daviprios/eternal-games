import { useDrop } from 'react-dnd'
import { draggable } from './draggableTypes'
import { useDraggableWindowContext } from './DraggableWindowContext'

export default function WindowSpace({
	window,
	children
}: {
	window?: string
	children: React.ReactNode
}) {
	const { updateSlot } = useDraggableWindowContext()

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: draggable.window,
			drop: () => updateSlot(id, window),
			collect: (monitor) => ({
				isOver: !!monitor.isOver()
			})
		}),
		[]
	)

	return (
		<div
			ref={drop}
			style={{
				width: '200px',
				height: '200px',
				border: 'solid 1px white',
				backgroundColor: isOver ? 'gray' : undefined
			}}
		>
			{children}
		</div>
	)
}
