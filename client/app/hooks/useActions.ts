import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '@/store/auth/auth.actions'
import { ModalActions } from '@/store/modal/modal.slice'

const actions = {
	...AuthActions,
	...ModalActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}