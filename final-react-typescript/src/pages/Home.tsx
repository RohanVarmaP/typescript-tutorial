import React from 'react'
import { Link } from 'react-router-dom'
import produtsImg from '../assets/images/products_img4.png'
import AccessoriesImg from '../assets/images/accessories_img.png'
import ClothingImg from '../assets/images/clothing_img.png'
import ElectronicsImg from '../assets/images/electronics_img.png'
import FootwearImg from '../assets/images/footwear_img.png'
import HomeKitchenImg from '../assets/images/home_kitchen_img.png'

const Home = () => {
    function categorySection() {
        return (
            <>
                <div>
                    <Link to='/products?category=Electronics'>
                        <img className='category-img' aria-label='view products' src={ElectronicsImg} alt="Electronics" />
                    </Link>
                    <span>Electronics</span>
                </div>
                <div>
                    <Link to={`/products?category=${encodeURIComponent("Home & Kitchen")}`}>
                        <img className='category-img' aria-label='view products' src={HomeKitchenImg} alt="Home & Kitchen" />
                    </Link>
                    <span>Home & Kitchen</span>
                </div>
                <div>
                    <Link to='/products?category=Footwear'>
                        <img className='category-img' aria-label='view products' src={FootwearImg} alt="Footwear" />
                    </Link>
                    <span>Footwear</span>
                </div>
                <div>
                    <Link to='/products?category=Clothing'>
                        <img className='category-img' aria-label='view products' src={ClothingImg} alt="Clothing" />
                    </Link>
                    <span>Clothing</span>
                </div>
                <div>
                    <Link to='/products?category=Accessories'>
                        <img className='category-img' aria-label='view products' src={AccessoriesImg} alt="Accessories" />
                    </Link>
                    <span>Accessories</span>
                </div>
            </>
        )
    }
    return (
        <>
            <h1>welcome to Home</h1>
            <Link to='/products'>
                <img aria-label='view products' src={produtsImg} alt="Placeholder" />
            </Link>
            <h2>Filter based on Category</h2>
            <section className='category-list'>
                {categorySection()}
            </section>
        </>
    )
}

export default Home
