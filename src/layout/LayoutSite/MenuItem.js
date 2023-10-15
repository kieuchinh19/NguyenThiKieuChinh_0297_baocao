import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservices from "../../services/MenuServices";

function MenuItem(props) {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservices.getByParentId('mainmenu', rowmenu.id).then(function (result) {
                setMenus(result.data.menus);
            })
        })();
    }, []);

    if (menus == null) {
        return (
            <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to={rowmenu.link}>
                    {rowmenu.name}
                </Link>
            </li>
        );
    }
    else {
        return (
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-black" to={rowmenu.link} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {rowmenu.name}
                </Link>
                <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdown">
                    {menus.map(function(menu1,index){
                        return(
                            <li key={index}><Link className="dropdown-item" to={menu1.link}>{menu1.name}</Link></li>
    
                        );
                    })}
                </ul>
            </li>

        );
    }

}

export default MenuItem;