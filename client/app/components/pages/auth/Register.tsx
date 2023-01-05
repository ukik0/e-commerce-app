import React, { ChangeEvent, useCallback, useState } from 'react'
import { Layout } from '@/components/layouts/Layout'
import { Field } from '@/components/UI/field/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from '@/types/auth.interface'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import { UploadService } from '@/services/upload.service'
import Link from 'next/link'
import cl from '@/components/pages/auth/Auth.module.scss'


//TODO:Добавить toast или toastr
export const Register = () => {
	const {register: registration} = useActions()
	const router = useRouter()
	const [avatarUrl, setAvatarUrl] = useState<string>('')

	const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<IAuth>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IAuth> = (data) => {
		registration({ ...data, avatarUrl }).then(() => {
			reset()
			router.push('/')
		}).catch((e: Error) => console.log(e.message))
	}

	const handleChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0]
		const formData = new FormData()
		formData.append('upload', file)

		const {data} = await UploadService.upload(formData)
		setAvatarUrl(data.url)
	}, [])

	return (
		<Layout title="Регистрация">
			<div className="container">
				<form className={`${cl.form} pt-[40px]`} onSubmit={handleSubmit(onSubmit)}>
					<h5 className={cl.title}>Регистрация</h5>

					<Field
						{...register('username', {
							required: 'Имя обязателен для заполнения',
							minLength: {
								value: 6,
								message: 'Не менее 6 имволов'
							}
						})}
						placeholder={'Введите Имя и Фамилию'}
						type={'text'}
						error={errors.username}
						title="Имя"
					/>

					<Field
						{...register('email', {
							required: 'Email обязателен для заполнения',
							pattern: {
								value: /^\S+@\S+\.\S+$/,
								message: 'Неверный Email'
							}
						})}
						placeholder={'Введите Email'}
						type={'email'}
						error={errors.email}
						title="Email"
					/>

					<Field
						{...register('password', {
							required: 'Пароль не может быть пустым',
							minLength: {
								value: 6,
								message: 'Не менее 6 имволов'
							}
						})}
						placeholder={'Введите Пароль'}
						type={'password'}
						error={errors.password}
						title={'Пароль'}
					/>

					<Field
						type={'file'}
						title={'Ваш аватар'}
						onChange={handleChange}
					/>

					<button disabled={!isValid} type={'submit'}>
						Регистрация
					</button>

					<p>
						Есть аккаунт?
						<Link href={'/login'}>Войти</Link>
					</p>
				</form>
			</div>
		</Layout>
	)
}
