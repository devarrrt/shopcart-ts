import { call, put, takeLatest } from 'redux-saga/effects'
import { setProducts, ProductsActionsType } from './productAction';
import { getProducts } from './../../api/api';


export function* fetchProductsRequest(){
	try {
		const items = yield call ( getProducts )
		yield put( setProducts( items ))
	} catch {
		console.log( 'ошибочка вышла' )
	}
}


export function* productsSaga( ){
	yield takeLatest( ProductsActionsType.FETCH_PRODUCTS, fetchProductsRequest )
}