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
        // Electronics
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            description: "High-fidelity over-ear headphones with 40-hour battery life and noise cancellation.",
            priceCents: 8999,
            category: "Electronics"
        },
        {
            id: 4,
            name: "4K Ultra HD Smart TV - 50 Inch",
            description: "Smart TV with built-in apps, HDR10, and voice remote control.",
            priceCents: 39900,
            category: "Electronics"
        },
        {
            id: 8,
            name: "Gaming Mouse - RGB",
            description: "Programmable buttons, DPI switch, and customizable lighting.",
            priceCents: 3549,
            category: "Electronics"
        },
        {
            id: 9,
            name: "Bluetooth Portable Speaker",
            description: "Waterproof, wireless speaker with deep bass and 12-hour battery.",
            priceCents: 4999,
            category: "Electronics"
        },
        {
            id: 10,
            name: "USB-C Charging Hub",
            description: "Multi-port hub for USB-C laptops with HDMI, USB 3.0, and SD card support.",
            priceCents: 2899,
            category: "Electronics"
        },

        // Home & Kitchen
        {
            id: 2,
            name: "Stainless Steel Water Bottle",
            description: "Double-wall insulated bottle keeps drinks cold for 24 hours and hot for 12 hours.",
            priceCents: 2550,
            category: "Home & Kitchen"
        },
        {
            id: 7,
            name: "Digital Kitchen Scale",
            description: "Precise scale with tare function, LED display, and 5kg capacity.",
            priceCents: 1499,
            category: "Home & Kitchen"
        },
        {
            id: 11,
            name: "Electric Milk Frother",
            description: "Foams milk for lattes and cappuccinos in seconds with a single touch.",
            priceCents: 1899,
            category: "Home & Kitchen"
        },
        {
            id: 12,
            name: "Nonstick Frying Pan",
            description: "Induction-compatible, ceramic-coated pan for low-oil cooking.",
            priceCents: 3299,
            category: "Home & Kitchen"
        },
        {
            id: 13,
            name: "LED Motion Sensor Night Light",
            description: "Automatically turns on in dark hallways and bathrooms.",
            priceCents: 999,
            category: "Home & Kitchen"
        },

        // Footwear
        {
            id: 3,
            name: "Men’s Running Shoes",
            description: "Lightweight athletic shoes with breathable mesh and cushioned sole.",
            priceCents: 5999,
            category: "Footwear"
        },
        {
            id: 14,
            name: "Women’s Sneakers",
            description: "Comfortable walking shoes with memory foam insoles.",
            priceCents: 4799,
            category: "Footwear"
        },
        {
            id: 15,
            name: "Men’s Hiking Boots",
            description: "Water-resistant boots with ankle support and rugged sole.",
            priceCents: 7599,
            category: "Footwear"
        },
        {
            id: 16,
            name: "Women’s Sandals",
            description: "Adjustable strap sandals with arch support.",
            priceCents: 2699,
            category: "Footwear"
        },
        {
            id: 17,
            name: "Unisex Flip Flops",
            description: "Lightweight and durable, perfect for everyday use.",
            priceCents: 1199,
            category: "Footwear"
        },

        // Clothing
        {
            id: 5,
            name: "Cotton Graphic T-Shirt",
            description: "100% cotton casual t-shirt with durable print and classic fit.",
            priceCents: 1800,
            category: "Clothing"
        },
        {
            id: 18,
            name: "Slim Fit Jeans",
            description: "Stretchable denim with a stylish cut and mid-rise waist.",
            priceCents: 3599,
            category: "Clothing"
        },
        {
            id: 19,
            name: "Hooded Sweatshirt",
            description: "Warm fleece hoodie with kangaroo pocket and ribbed cuffs.",
            priceCents: 3299,
            category: "Clothing"
        },
        {
            id: 20,
            name: "Pack of 3 Ankle Socks",
            description: "Breathable cotton socks with reinforced heel and toe.",
            priceCents: 699,
            category: "Clothing"
        },
        {
            id: 21,
            name: "Casual Chinos",
            description: "Slim tapered chinos with stretch and zip fly.",
            priceCents: 2999,
            category: "Clothing"
        },

        // Accessories
        {
            id: 6,
            name: "Wooden Laptop Stand",
            description: "Ergonomic laptop riser made of bamboo for better posture and ventilation.",
            priceCents: 2995,
            category: "Accessories"
        },
        {
            id: 22,
            name: "Smartphone Tripod Stand",
            description: "Portable tripod with adjustable legs and universal phone mount.",
            priceCents: 1599,
            category: "Accessories"
        },
        {
            id: 23,
            name: "Leather Wallet",
            description: "RFID-blocking wallet with multiple card slots and slim profile.",
            priceCents: 2099,
            category: "Accessories"
        },
        {
            id: 24,
            name: "Travel Toiletry Bag",
            description: "Water-resistant bag with multiple compartments for organized packing.",
            priceCents: 1895,
            category: "Accessories"
        },
        {
            id: 25,
            name: "Key Organizer",
            description: "Compact metal key holder that eliminates pocket bulge and jingle.",
            priceCents: 1299,
            category: "Accessories"
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
