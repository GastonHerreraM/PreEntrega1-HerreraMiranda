import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import HeadNav from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css"

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <HeadNav />
          <Routes>
            <Route path="/" element = {<ItemListContainer />} />
            <Route path="/category/:categoryId" element = {<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;