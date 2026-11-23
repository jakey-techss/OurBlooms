import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Gallery from "./pages/gallery/Gallery"
import About from "./pages/about/About"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
