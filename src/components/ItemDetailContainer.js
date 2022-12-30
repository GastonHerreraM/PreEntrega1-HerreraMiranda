import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={data} />
    );
}

export default ItemDetailContainer;