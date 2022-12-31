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
          price: item.costItem,
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

        function swalticket (result) {
          const swalOrder = withReactContent(Swal)
              swalOrder.fire({
                  title: `Your order has been created. `,
                  text: `Please take note of the ID of your order. \n\n\nOrder ID: ${result.id}`
                  })
          }
      
        createOrderInFirestore()
          .then(result => swalticket(result))
          .catch(err => console.log(err));
      
        contextHook.removeList();
        }

    return (
        <>
            <p className="text-center fs-3">Tu Carrito</p>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12 col-md-9 col-lg-8">
                      {
                        contextHook.cartList.length > 0 &&
                        contextHook.cartList.map(item => 
                          <>
                            <div className="container">
                              <div className="card mb-3">
                                <div className="row g-0">
                                  <div className="col-md-4">
                                    <img src={item.imgItem} className="img-fluid rounded-start" alt="object img" />
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fs-2">{item.titleItem}</h5>
                                        <p className="card-text fs-5">por unidad: $ {item.costItem}</p>
                                        <p className="card-text fs-5">Cantidad: {item.qtyItem}</p>
                                        <p className="card-text fs-4">Costo total: $ {contextHook.calcTotalPerItem(item.idItem)}</p>
                                        <button className="btn btn-dark m-2 btn_adjust1 d-flex justify-content-center align-items-center fs-5" onClick={() => contextHook.deleteItem(item.idItem)}>Eliminar</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      }
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-4">
                      {
                        contextHook.cartList.length > 0 &&
                        <>
                        <Link to='/' style={{textDecoration: "none"}} className="d-flex justify-content-center align-items-center mb-5"><button type="button" className="btn btn-outline-dark m-2 d-flex justify-content-center align-items-center fs-5">CONTINUE SHOPPING</button></Link>
                            <div className="container">
                              <div className="row">
                                ORDER SUMMARY
                                <p className="mb-5">TOTAL: $ {contextHook.calcSubTotal()}</p>
                                <button className="btn btn-dark m-2 d-flex justify-content-center align-items-center fs-5" type="button" onClick={createOrder}>FINALIZAR COMPRA</button>
                              </div>
                            </div>
                          </>
                      }
                    </div>
                  </div>
                </div>
                {
                  (contextHook.cartList.length > 0)
                  ? <button className="btn btn-outline-dark m-2 d-flex justify-content-center align-items-center fs-5" onClick={contextHook.removeList}>DELETE ALL PRODUCTS</button>
                  : <p className="text-center fs-4 d-flex justify-content-center">Tu carrito esta vacio</p>
                }
      </>
    );
  }

export default Cart;