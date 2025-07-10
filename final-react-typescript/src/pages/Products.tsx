import React from 'react'
import ProductCart from '../components/ProductCart'
import { useLocation } from 'react-router-dom'
import { productsType, products } from '../data/productsData'

const Products = (props: { cartProducts: productsType[], setCart: React.Dispatch<React.SetStateAction<productsType[]>> }) => {
    const location = useLocation();
    const category: string = new URLSearchParams(location.search).get('category') || 'All';
    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);
    return (
        <>
            <h1>Products List</h1>

            <section className='product-list'><ProductCart products={filteredProducts} {...props} from={'/products'} /></section>
        </>
    )
}

export default Products
