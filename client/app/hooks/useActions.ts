import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthActions from '@/store/auth/auth.actions'
import { ModalActions } from '@/store/modal/modal.slice'
import { CartActions } from '@/store/cart/cart.slice'
import { SortActions } from '@/store/sort/sort.slice'

const actions = {
	...AuthActions,
	...ModalActions,
	...CartActions,
	...SortActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}