


export enum LoadingState {
	LOADED = 'LOADED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}


 export interface Product {
	id: number,
	title: string,
	price: number,
	description: string,
	category: string,
	image: string
}


export interface ProductsState {
	items: Product[],
	loadingState: LoadingState
}


