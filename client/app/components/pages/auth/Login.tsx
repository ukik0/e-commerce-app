import { Layout } from '@/components/layouts/Layout'
import { Field } from '@/components/UI/field/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from '@/types/auth.interface'
import Link from 'next/link'
import cl from './Login.module.scss'

export const Login = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit
	} = useForm<IAuth>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IAuth> = (data) => {
		console.log(data)
	}

	return (
		<Layout title="Авторизация">
			<div className="container">
				<form className={`${cl.form} pt-[120px]`} onSubmit={handleSubmit(onSubmit)}>
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
