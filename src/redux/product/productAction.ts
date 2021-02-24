import { Action } from 'redux'
import { ProductsState } from './state';


export enum ProductsActionsType {
	FETCH_PRODUCTS = 'FETCH_PRODUCTS',
	SET_PRODUCTS = 'SET_PRODUCTS'
}


export interface FetchProductsInterface extends Action <ProductsActionsType> {
type:ProductsActionsType.FETCH_PRODUCTS
}
export const fetchProducts = ( ): FetchProductsInterface => ({
	type: ProductsActionsType.FETCH_PRODUCTS
})




export interface SetProductsInterface extends Action <ProductsActionsType> {
	type:ProductsActionsType.SET_PRODUCTS,
	payload: ProductsState['items']
	}
	export const setProducts = ( payload: ProductsState['items'] ):SetProductsInterface => ({
		type: ProductsActionsType.SET_PRODUCTS,
		payload
	})
	


export type ProductsActions = FetchProductsInterface | SetProductsInterface