import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    
    return (
        <>
            <button className="btn btn-dark d-flex justify-content-center align-items-center btn-sm m-2 fs-1 fw-bold btn_adjust" onClick={increment}>+</button>
            <div className="d-flex justify-content-center align-items-center fs-2">{count}</div>
            <button className="btn btn-dark d-flex justify-content-center align-items-center btn-sm m-2 fs-1 fw-bold btn_adjust" onClick={decrement}>-</button>
            <p></p>
            {
                stock
                ? <p><button className="btn btn-dark m-2 btn_adjust1 d-flex justify-content-center align-items-center fs-5" onClick={() => onAdd(count)}>Añadir al carrito</button></p>
                : <p><button disabled className="btn btn-dark m-2 btn_adjust1 d-flex justify-content-center align-items-center fs-5">Añadir al carrito</button></p>
            }
        </>
    );
}

export default ItemCount;