import { combineReducers } from 'redux'
import productsReducer from './product/productReducer'

export const rootReducer = combineReducers({
	products: productsReducer
})

