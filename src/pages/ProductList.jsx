import React from 'react'
import Navbar from '../components/Navbar'
import ShoppingList from '../components/ShoppingList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Flowers from '../components/Flowers'

const ProductList = () => {
    return (
        <div>
            <Navbar />
            <Flowers />
            <ShoppingList />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList
