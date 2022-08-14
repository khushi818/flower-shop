import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ShoppingList from '../components/ShoppingList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Categories />
            <ShoppingList />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
