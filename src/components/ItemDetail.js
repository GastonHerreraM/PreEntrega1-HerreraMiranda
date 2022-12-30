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
            <div>
                <div>
                    <img src={item.image} alt="object img" />
                </div>
                <div>
                    <p>{item.title}</p>
                    <p>Precio: {item.price}</p>
                    <p>Unidades en stock: {item.stock}</p>
                    <p><b>Sobre el producto:</b></p>
                    <p>{item.description}</p>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><button>CheckOut</button></Link>
                    }
                </div>
            </div>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;