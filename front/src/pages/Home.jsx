import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Collection from '../components/Collection'


const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <Announcement /> */}
            <Slider />
            <Collection />
            {/* <Categories /> */}
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
