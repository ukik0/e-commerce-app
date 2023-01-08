import { Layout } from '@/components/layouts/Layout'
import { Heading } from '@/components/UI/heading/Heading'
import { ChangeEvent, MouseEvent, useCallback, useRef, useState } from 'react'
import { UploadService } from '@/services/upload.service'
import { ProductsService } from '@/services/products.service'
import { toastr } from 'react-redux-toastr'
import { useRouter } from 'next/router'
import cl from './Create.module.scss'

export const Create = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [imageUrl, setImageUrl] = useState<string>('')
	const [values, setValues] = useState({title: '', description: '', price: 0, image: '', category: 0})
	const router = useRouter()

	const changeInputHandler = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			try {
				const file = event.target.files![0]
				const formData = new FormData()
				formData.append('upload', file)

				const { data } = await UploadService.upload(formData)
				data?.url && setImageUrl(data.url)
			} catch (e) {
				toastr.error('Загрузка картинки', 'Произошла ошибка')
			}
		},
		[imageUrl]
	)


	const createProduct = async (event: MouseEvent<HTMLButtonElement>) => {
		try {
			const {data} = await ProductsService.createProduct({...values, image: imageUrl, price: Number(values.price), category: Number(values.category), type: ["Традиционное", "Тонкое"], size: ["Маленькая", "Средняя", "Большая"]})
			router.push('/')
		} catch (e) {
			toastr.error('Загрузка товара', 'произошла ошибка')
		}
	}

	const changeValuesHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setValues({...values, [event.target.name]: event.target.value})
	}, [values])

	return (
		<Layout title="Создай свой продукт">
			<div className="container">
				<Heading title={'Создать продукт'} />

				<button onClick={() => inputRef?.current?.click()} className={cl.btn}>Загрузить картинку</button>

				<input ref={inputRef} type="file" className={cl.hidden} onChange={changeInputHandler} hidden />

				{imageUrl && (
					<>
						<img src={`http://localhost:8001${imageUrl}`} alt="image" className={cl.img} />
						<button onClick={() => setImageUrl('')} className={cl.btn}>Удалить</button>
					</>
				)}


				<div className={cl.wrapper}>
					<input type='text' value={values.title}  maxLength={30} className={cl.input} name={'title'} onChange={changeValuesHandler}/>
					<input type='text'  value={values.description} maxLength={100} className={cl.input} name={'description'} onChange={changeValuesHandler}/>
					<input type='number' value={values.price} maxLength={5} className={cl.input} name={'price'} onChange={changeValuesHandler}/>
					<input type='number' value={values.category} maxLength={1} className={cl.input} name={'category'} onChange={changeValuesHandler} />
				</div>

				<button className={cl.btn} onClick={createProduct}>Опубликовать</button>
			</div>
		</Layout>
	)
}
