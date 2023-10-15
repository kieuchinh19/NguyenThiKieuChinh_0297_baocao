import { Link } from "react-router-dom";
import menu from "../../datatest/menu.json"
function Menu() {
  const listMenu = menu.data;
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" href="#">DANH MỤC SẢN PHẨM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {listMenu.map(function (menu, index) {
              return (
                <li className="nav-item " key={index}>
                  <Link className="nav-link active text-white" aria-current="page" to={menu.link} >{menu.name}</Link>
                </li>
              );
            })}


            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sản phẩm
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
              </ul>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit text-white">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Menu;