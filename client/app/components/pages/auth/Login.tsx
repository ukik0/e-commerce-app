import { Layout } from '@/components/layouts/Layout'
import { Field } from '@/components/UI/field/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from '@/types/auth.interface'
import { useActions } from '@/hooks/useActions'
import Link from 'next/link'
import cl from './Auth.module.scss'
import { useRouter } from 'next/router'
import { toastr } from 'react-redux-toastr'

export const Login = () => {
	const { login } = useActions()
	const router = useRouter()

	const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm<IAuth>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IAuth> = (data) => {
		login(data)
			.then(() => {
				reset()
				router.push('/')
				toastr.success('Авторизация', 'прошла успешно')
			})
			.catch((e: Error) => toastr.error('Ошибка.', 'Возможно, пользователя не существует'))
	}

	return (
		<Layout title="Авторизация">
			<div className="container">
				<form
					className={`${cl.form} pt-[120px]`}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h5 className={cl.title}>Вход</h5>
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

					<button disabled={!isValid} type={'submit'}>
						Войти
					</button>

					<p>
						Нет аккаунта?
						<Link href={'/register'}>Зарегистрироваться</Link>
					</p>
				</form>
			</div>
		</Layout>
	)
}
