import ItemCount from "./itemCount";
import { CartContext } from "./CartContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const contextHook = useContext(CartContext);

    const onAdd = (qty) => {
        if ((qty) > 0) {
        setItemCount(qty);
        contextHook.addToCart(item, qty);
    }}

    return (
        <>
        {
            item && item.image
            ?
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                        <img src={item.image} alt="object img" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <p className="fs-1 fw-bold">{item.name}</p>
                        <p className="fs-4">{item.description}</p>
                        <div className="d-flex m-1">
                            <p className="fs-5 m-3 d-flex align-items-end">Precio: ${item.price}</p>
                            <p className="fs-5 m-3 d-flex align-items-end">Unidades en stock: {item.stock}</p>
                        </div>
                        <div className="d-flex">
                            {
                                itemCount === 0
                                ? <ItemCount className="w-auto p-3" stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                : <Link to='/cart' style={{textDecoration: "none"}}><button className="btn btn-dark m-2 btn_adjust1 d-flex justify-content-center align-items-center fs-5">Checkout</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;