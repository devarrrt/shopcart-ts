import { RootState } from './../store';
 import { LoadingState, ProductsState } from './state'


 export const selectProductsState = ( state: RootState ): ProductsState => state.products
 export const selectLoadingState = ( state: RootState ) => selectProductsState( state ).loadingState



 export const selectProducts = ( state: RootState ) => selectProductsState( state ).items

export const selectProductsLoading = ( state: RootState ) => selectLoadingState( state ) === LoadingState.LOADING
