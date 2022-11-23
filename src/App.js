import HeadNav from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css"

const App = () => {
  return(
    <>
      <HeadNav />
      <ItemListContainer mensaje="Aca se pone algo a futuro"/>
    </>
  )
}

export default App;