import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { ProductsState } from './product/state';



declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
} 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()


const store = createStore( rootReducer, composeEnhancers( applyMiddleware( sagaMiddleware )))


export interface RootState {
	products: ProductsState
}



export default store
sagaMiddleware.run(rootSaga);
