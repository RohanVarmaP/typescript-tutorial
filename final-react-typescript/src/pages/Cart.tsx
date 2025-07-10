import React from 'react'
import { productsType } from '../data/productsData'
import ProductCart from '../components/ProductCart'

const Cart = (props: { cartProducts: productsType[], setCart: React.Dispatch<React.SetStateAction<productsType[]>> }) => {
    return (
        <>
            <h1>Cart</h1>
            <section className='cartlist-list'>
                <ProductCart products={props.cartProducts} {...props} from={'/cart'} />
            </section>
        </>
    )
}

export default Cart
