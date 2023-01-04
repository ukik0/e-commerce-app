import { Layout } from '@/components/layouts/Layout'
import { Field } from '@/components/UI/field/Field'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuth } from '@/types/auth.interface'
import Link from 'next/link'
import cl from '@/components/pages/auth/Login.module.scss'

export const Register = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit
	} = useForm<IAuth>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IAuth> = (data) => {
		console.log(data)
	}

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
						placeholder={'Введите Имя'}
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

					<button disabled={!isValid} type={'submit'}>
						Войти
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
