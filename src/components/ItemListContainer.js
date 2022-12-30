import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { firestoreFetch } from "../utils/firestoreFetch"

const ItemListContainer = () => {
    const [products, setProducts] = useState ([]); 
    const { categoryId } = useParams();
    
    useEffect(() => {
        firestoreFetch(categoryId)
        .then(result => setProducts(result))
        .catch(err => console.log(err));
    }, [categoryId]);


    useEffect(() => {
        return (() => {
            setProducts([]);
        })
    }, []);
    
    
    return (
        <>
            <ItemList items={products} />
        </>
    )
}

export default ItemListContainer;