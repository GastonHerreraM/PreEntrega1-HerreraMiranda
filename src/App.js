import {BrowserRouter, Routes, Route} from "react-router-dom"
import HeadNav from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeadNav />
        <Routes>
          <Route path="/" element = {<ItemListContainer />} />
          <Route path="/category/:categoryId" element = {<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;