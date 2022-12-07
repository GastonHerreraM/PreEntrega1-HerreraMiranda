const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item && item.image
            ?
            <>
            <div>
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <p>{item.title}</p>
                    <p>Precio: {item.price}</p>
                    <p>Unidades en stock: {item.stock}</p>
                    <p><b>Sobre el producto:</b></p>
                    <p>{item.description}</p>
                </div>
            </div>
            </>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;