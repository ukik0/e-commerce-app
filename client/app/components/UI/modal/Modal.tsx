import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import cn from 'classnames'
import cl from './Modal.module.scss'

interface ModalProps {
	active: boolean
	setActive: Dispatch<SetStateAction<boolean>>
}

//TODO: Пофиксить скролл, когда открыта

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ active, setActive, children }) => {
	return (
		<div className={cn(cl.modal, {
			[cl.active]: active
		})} onClick={() => setActive(false)}>
			<div className={cn(cl.content, {
				[cl.active]: active
			})} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
