import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Cart = () => {
    const contextHook = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = contextHook.cartList.map(item => ({
          id: item.idItem,
          title: item.titleItem,
          price: item.priceItem,
          qty: item.qtyItem
        }));
    
        contextHook.cartList.forEach(async (item) => {
          const itemRef = doc(collection (db, "products"), item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Cosme Fulanito",
            email: "noeshomero@gmail.com",
            phone: "666 555 888"
          },
          total: contextHook.calcTotal(),
          items: itemsForDB,
          date: serverTimestamp()
        };
        
        const createOrderInFirestore = async () => {
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }

        function swalorder (result) {
          const swalOrder = withReactContent(Swal)
              swalOrder.fire({
                  title: `Your order has been created. `,
                  text: `Please take note of the ID of your order. \n\n\nOrder ID: ${result.id}`
                  })
          }
      
        createOrderInFirestore()
          .then(result => swalorder(result))
          .catch(err => console.log(err));
      
        contextHook.removeList();
        }

    return (
        <>
            YOUR CART
                <Link to='/'>CONTINUE SHOPPING</Link>
                {
                  (contextHook.cartList.length > 0)
                  ? <button onClick={contextHook.removeList}>DELETE ALL PRODUCTS</button>
                  : <p>Your cart is empty</p>
                }
                {
                  contextHook.cartList.length > 0 &&
                  contextHook.cartList.map(item => 
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        <div className="card">
                        <img src={item.image} className="card-img-top" alt="object img" />
                        <div className="card-body">
                            <h5 className="card-title">{item.titleItem}</h5>
                            <p className="card-text">por unidad: $ {item.costItem}</p>
                            <p className="card-text">Cantidad: {item.qtyItem}</p>
                            <p className="card-text">Costo total: {contextHook.calcTotalPerItem(item.idItem)}</p>
                            <button type="filled" onClick={() => contextHook.deleteItem(item.idItem)}>DELETE</button>
                        </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                }
                {
                  contextHook.cartList.length > 0 &&
                    <>
                    <div className="container">
                      <div className='product-cart row'>
                        ORDER SUMMARY
                      <p>TOTAL: {contextHook.calcSubTotal()}</p>
                      <button onClick={createOrder}>CHECKOUT NOW</button>
                      </div>
                    </div>
                    </>
                }
      </>
    );
}

export default Cart;