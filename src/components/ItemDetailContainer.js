import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const {products} = require("../utils/products");

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;