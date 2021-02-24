import axios from 'axios'


export const getProducts = async()=> {
	return axios.get('https://fakestoreapi.com/products')
	.then(({ data }) => data)
}

