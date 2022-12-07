import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-12 d-flex flex-wrap justify-content-center p-2">
                        {
                            items.length > 0
                            ? items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.cost} image={item.image[0]} />)
                            : <p>Cargando...</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemList;