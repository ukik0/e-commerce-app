import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '@/store/auth/auth.actions'

const actions = {
	...AuthActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}