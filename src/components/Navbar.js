import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const HeadNav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-custom">
            <div className="container-fluid">
                <a className="navbar-brand"><Link to="/" >
                    MH Store
                </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/category/1">Peluches</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/category/2">Figuras/Estatuas</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/category/3">Posters</Link></a>
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default HeadNav;