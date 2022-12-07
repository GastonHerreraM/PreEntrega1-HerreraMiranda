import {Link} from "react-router-dom"

const  Item = ({id, name, stock, price, image}) => {
    return (
            <div className="card">
                <img src={image} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <Link as={Link} to={`/item/${id}`} variant="primary">Detalle</Link>
                </div>
            </div>
    )
}

export default Item;