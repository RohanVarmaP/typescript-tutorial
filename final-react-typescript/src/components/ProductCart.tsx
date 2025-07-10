import React from 'react'
import { productsType } from '../data/productsData'

function isPresent(cart: productsType[], item: productsType): boolean {
    return cart.some((cartitem) => cartitem.id === item.id)
}

const ProductCart = (props: { products: productsType[], cartProducts: productsType[], setCart: React.Dispatch<React.SetStateAction<productsType[]>>, from: string }) => {
    function handleClick(item: productsType): void {
        if (!isPresent(props.cartProducts, item)) {
            props.setCart(prev => [...prev, item])
        }
    }
    function handleDelete(item: productsType): void {
        props.setCart(prev => prev.filter(cartItem => cartItem.id !== item.id))
    }
    return (
        <>
            {props.products.map((item: productsType): React.JSX.Element => (
                <article key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => { handleClick(item) }}>
                        ${(item.priceCents / 100).toFixed(2)}
                    </button>
                    {props.from === '/products' ? <button onClick={() => { handleClick(item) }}>
                        {isPresent(props.cartProducts, item) ? 'Added' : 'Add to Cart'}
                    </button> : <button onClick={() => handleDelete(item)}>
                        Delete from cart
                    </button>}
                </article>
            ))}
        </>
    )
}

export default ProductCart
