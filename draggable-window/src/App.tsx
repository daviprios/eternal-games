import { useDraggableWindowContext } from './DraggableWindowContext'
import WindowShortcut from './WindowShortcut'
import WindowSpace from './WindowSpace'

export default function App() {
	const { slots } = useDraggableWindowContext()

	return (
		<article
			style={{
				padding: '1rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem'
			}}
		>
			<aside>
				<ul style={{ listStyle: 'none' }}>
					<li>
						<WindowShortcut>green</WindowShortcut>
					</li>
					<li>
						<WindowShortcut>red</WindowShortcut>
					</li>
					<li>
						<WindowShortcut>blue</WindowShortcut>
					</li>
					<li>
						<WindowShortcut>yellow</WindowShortcut>
					</li>
				</ul>
			</aside>
			<main style={{ display: 'flex', gap: '1rem' }}>
				{Array.from(slots).map(([id, window]) => {
					return (
						<WindowSpace
							key={id}
							window={window}
						>
							{id}
						</WindowSpace>
					)
				})}
			</main>
		</article>
	)
}
