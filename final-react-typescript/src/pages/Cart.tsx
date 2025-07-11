import React from 'react'
import { productsType } from '../data/productsData'
import ProductCart from '../components/ProductCart'
import Payment from '../components/Payment'

const Cart = (props: { cartProducts: productsType[], setCart: React.Dispatch<React.SetStateAction<productsType[]>> }) => {
    return (
        <>
            <h1>Cart</h1>
            <section className='cart'>
                <section className='cartlist-list'>
                    <ProductCart products={props.cartProducts} {...props} from={'/cart'} />
                </section>
                <section className='payment-section'>
                    <Payment products={props.cartProducts} />
                </section>
            </section>
        </>
    )
}

export default Cart
