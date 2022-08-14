import React from 'react'
import Navbar from '../components/Navbar'
import ShoppingList from '../components/ShoppingList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Description from '../components/Description'


const ProductInfo = () => {
    return (
        <div>
            <Navbar />
            <Description />
            <ShoppingList />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductInfo
