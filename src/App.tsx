// import { Route, Routes } from "react-router"

import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Item from "./pages/item/Item"
import Cart from "./pages/cart/Cart"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <Navbar/>
      {/* <Home/>
      <Item 
        name="Seamless Delight High Neck Bra" 
        price={60}
        discount={0.60}
        imageSource="https://cdn.shopify.com/s/files/1/2185/2813/products/W9536R_04681_b2_s1_a1_m140_750x.jpg?v=1676675720"
      /> */}
      <Cart/>
      <Footer/>
    </main>
  )
}

export default App
