import React from 'react'
import ProductCart from '../components/ProductCart'

export type productsType = {
    id: number,
    name: string,
    description: string,
    priceCents: number,
    category: string
}

const Products = (props: { cartProducts: productsType[], setCart: React.Dispatch<React.SetStateAction<productsType[]>> }) => {

    const products: productsType[] = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            description: "High-fidelity over-ear headphones with 40-hour battery life and noise cancellation.",
            priceCents: 8999,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Stainless Steel Water Bottle",
            description: "Double-wall insulated bottle keeps drinks cold for 24 hours and hot for 12 hours.",
            priceCents: 2550,
            category: "Home & Kitchen"
        },
        {
            id: 3,
            name: "Men’s Running Shoes",
            description: "Lightweight athletic shoes with breathable mesh and cushioned sole.",
            priceCents: 5999,
            category: "Footwear"
        },
        {
            id: 4,
            name: "4K Ultra HD Smart TV - 50 Inch",
            description: "Smart TV with built-in apps, HDR10, and voice remote control.",
            priceCents: 39900,
            category: "Electronics"
        },
        {
            id: 5,
            name: "Cotton Graphic T-Shirt",
            description: "100% cotton casual t-shirt with durable print and classic fit.",
            priceCents: 1800,
            category: "Clothing"
        },
        {
            id: 6,
            name: "Wooden Laptop Stand",
            description: "Ergonomic laptop riser made of bamboo for better posture and ventilation.",
            priceCents: 2995,
            category: "Accessories"
        },
        {
            id: 7,
            name: "Digital Kitchen Scale",
            description: "Precise scale with tare function, LED display, and 5kg capacity.",
            priceCents: 1499,
            category: "Home & Kitchen"
        },
        {
            id: 8,
            name: "Gaming Mouse - RGB",
            description: "Programmable buttons, DPI switch, and customizable lighting.",
            priceCents: 3549,
            category: "Electronics"
        }
    ];
    return (
        <>
            <h1>Products List</h1>
            <section className='product-list'><ProductCart products={products} {...props} from={'/products'} /></section>
        </>
    )
}

export default Products
