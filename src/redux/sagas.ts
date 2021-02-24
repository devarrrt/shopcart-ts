import { all } from 'redux-saga/effects'
import { productsSaga } from './product/productSaga'


export default function* rootSaga() {
	yield all([
		productsSaga()
	])
}