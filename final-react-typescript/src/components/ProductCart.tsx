import React from 'react'
import { productsType } from '../pages/Products'

const ProductCart = (props: { products: productsType[] }) => {
    return (
        <>
            {props.products.map((item: productsType): React.JSX.Element => (
                <article key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button>${(item.priceCents / 100).toFixed(2)}</button>
                    <button>Add to Cart</button>
                </article>
            ))}
        </>
    )
}

export default ProductCart
