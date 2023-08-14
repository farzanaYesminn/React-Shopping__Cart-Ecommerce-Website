import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import ShopContextProvider from './context/ShopContextProvider'

function App() {

  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
      
    </>
  )
}

export default App
