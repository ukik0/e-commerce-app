import { Create } from '@/components/pages/create/Create'
import { NextPageAuth } from '@/providers/route.interface'

const CreatePage: NextPageAuth = () => {
	return <Create/>
}

CreatePage.isOnlyUser = true

export default CreatePage