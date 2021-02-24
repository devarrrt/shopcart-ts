
import { LoadingState, ProductsState } from './state';
import { ProductsActionsType, ProductsActions } from './productAction'


const initialState: ProductsState = {
	items: [],
	loadingState: LoadingState.NEVER
}



const productsReducer = (state = initialState, action: ProductsActions) => {
	switch (action.type) {
		case ProductsActionsType.FETCH_PRODUCTS:
			return {
				...state,
				loadingState: LoadingState.LOADING
			}

		case ProductsActionsType.SET_PRODUCTS:
			return {
				...state,
				items: action.payload,
				loadingState: LoadingState.LOADED
			}
			default: return state
	}
}




export default productsReducer 