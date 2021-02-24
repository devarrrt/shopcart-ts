import React from 'react'
import { ItemWrapper } from './ItemStyle'
import {Button} from '@material-ui/core'
import { IProduct } from '../../App'


interface IItem {
	product: IProduct,
	addToCart: ( product: IProduct ) => void
}



export const Item: React.FC<IItem> = ({ product, addToCart }) => {
	return (
		<ItemWrapper>
				<img src={ product.image }  alt="img" />
				<div> 
				<h3> { product.title } </h3>
				<p> { product.description } </p>
				<h3> ${ product.price } </h3>  
				</div>
				<Button onClick={( ) => addToCart(product)}> Add this </Button>
		</ItemWrapper>
	)
}
