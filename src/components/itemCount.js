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
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
            <p></p>
            {
                stock
                ? <p><button onClick={() => onAdd(count)}>Añadir al carrito</button></p>
                : <p><button disabled>Añadir al carrito</button></p>
            }
        </>
    );
}

export default ItemCount;