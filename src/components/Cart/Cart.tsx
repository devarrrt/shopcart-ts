import React from 'react'
import './CartStyles.css'
import { IProduct } from '../../App'
import {CartItem} from '../CartItem/CartItem'



interface ICart {
	cartItems: IProduct[]
	addToCart: ( item: IProduct ) => void
	removeFromCart: ( id: number ) => void
}


export const Cart: React.FC<ICart> = ({ addToCart, cartItems, removeFromCart }) => {

	const calculateTotal = ( items: IProduct[])=> {
	return 	items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
	}


	return (
		<div className="wrapperCart">
			<h2> Your shopping cart </h2>
			{ cartItems.length === 0 ? <p> No items to cart </p> : null }
			{ cartItems.map( item => (
				<CartItem 
				item={ item } 
				key={ item.id } 
				addToCart={ addToCart } 
				removeFromCart={ removeFromCart }
				/>
			))}
		<h2> Total: ${ calculateTotal( cartItems ).toFixed(2) } </h2>
		</div>
	)
}

