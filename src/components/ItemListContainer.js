
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
const { products } = require ('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState ([]); 
    const { categoryId } = useParams();
    
    useEffect(() => {
        if (categoryId) {
            customFetch(2000, products.filter(item => item.categoryId === parseInt(categoryId)))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, products)
                .then(result => setDatos(result))
                .catch(err => console.log(err))
        }
    }, [categoryId]);
    
    
    return (
        <div>
            <ItemList items={datos} />
        </div>
    )
}

export default ItemListContainer;