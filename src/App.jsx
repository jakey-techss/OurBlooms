import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Gallery from "./pages/gallery/Gallery"
import About from "./pages/about/About"
import CartProvider from "./components/cartContext/CartContext"
import { supabase } from './supabaseClient'

function App() {


  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
