import { forwardRef } from 'react'
import { IField } from '@/components/UI/field/Field.interface'
import cl from './Field.module.scss'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', title, ...rest }, ref) => {
		return (
			<div className={cl.wrapper}>
				<label className={cl.label}>
					{title}

					<input ref={ref} type={type} {...rest} />
					{error && <div className={cl.error}>{error.message}</div>}
				</label>
			</div>
		)
	}
)
