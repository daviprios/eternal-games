import React, { createContext, useContext, useState } from 'react'

const draggableWindowContext = createContext({
	slots: new Map<number, string | undefined>(),
	createSlot: (() => {}) as () => number,
	removeSlot: (() => false) as (id: number) => boolean,
	updateSlot: (() => {}) as (id: number, window: undefined | string) => void
})

let lastId = 0

// eslint-disable-next-line react-refresh/only-export-components
export const useDraggableWindowContext = () =>
	useContext(draggableWindowContext)

export default function DraggableWindowContextProvider({
	children
}: {
	children: React.ReactNode
}) {
	const [slots, setSlots] = useState(new Map<number, string | undefined>())

	return (
		<draggableWindowContext.Provider
			value={{
				slots,
				createSlot: () => {
					const id = ++lastId
					setSlots((prev) => new Map(prev.set(id, undefined)))
					return id
				},
				removeSlot: (id) => {
					return slots.delete(id)
				},
				updateSlot: (id, window) => {
					if (!slots.has(id)) return
					setSlots((prev) => new Map(prev.set(id, window)))
				}
			}}
		>
			{children}
		</draggableWindowContext.Provider>
	)
}
