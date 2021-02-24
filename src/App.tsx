import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from './redux/product/productAction';
import { selectProducts, selectProductsLoading } from './redux/product/productSelector'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core'

import { Item } from './components/Item/Item'
import { Cart } from './components/Cart/Cart'
import './App.css'



export interface IProduct {
	id: number
	category: string
	description: string
	image: string
	price: number
	title: string
	amount: number
}



const App = () => {
	const [ cartOpen, setCartOpen ] = useState( false )
	const [cartItems, setcartItems] = useState([] as IProduct[] )


	const products = useSelector( selectProducts )
	const isLoading = useSelector( selectProductsLoading )
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch( fetchProducts() )
	}, [dispatch])


const addToCart = ( itemCart: IProduct ) => {
	setcartItems( prev => {
		const isItemCart = prev.find( item => item.id === itemCart.id )

		if ( isItemCart ) {
			return prev.map( item =>(
				item.id === itemCart.id ? { ...item, amount: item.amount + 1 }: item
			))
		}
		return [ ...prev, { ...itemCart, amount: 1 } ]
	})
}

const removeFromCart = ( id: number) => {
	setcartItems( prev => prev.reduce(( ack, item ) => {
		if ( item.id === id ) {
			if ( item.amount === 1 ) return ack
			return [ ...ack, { ...item, amount: item.amount - 1 }]
		} else {
			return [ ...ack, item ]
		}
	}, [] as IProduct[] ))
}


if ( isLoading ) {
	return <LinearProgress/>
}



	return (
		<div className="wrapper">
			<button className="button" onClick={ ()=> setCartOpen( true ) } >
			<Badge>
			<AddShoppingCartIcon/>
			</Badge>
			</button>

			<Drawer anchor="right" open={ cartOpen } onClose={ ()=>setCartOpen( false ) }>
					<Cart cartItems={ cartItems } addToCart={ addToCart } removeFromCart={ removeFromCart }  />
			</Drawer>

			<Grid container spacing={ 4 }>
				{ products?.map( (product) => (
					<Grid item key={ product.id } xs={ 12 } sm={ 3 } >
						{/* @ts-ignore */}
						<Item product={ product } addToCart={ addToCart }  />
						</Grid>
						))}
			</Grid>

		</div>
	)
}

export default App
