import { FieldError } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

export interface IFieldProps {
	error?: FieldError
	title: string
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}