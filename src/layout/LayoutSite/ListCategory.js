import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryServices";
import "./style.css"

function ListCategory() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservice.getCategoryByParentId(0);
                setCategorys(result.data.categorys)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);

    return (
        <div style={{background:"#ffeee6"}} className="listcategory mb-5 ">
            <h3 style={{background:"#ff9966"}} className="p-3 m-0 text-center">Danh mục sản phẩm</h3>
            <ul className="pb-2">
                {categorys.map(function (cat, index) {
                    return (
                        <li  key={index}>
                            <Link className="list" to={"/danh-muc-san-pham/" + cat.slug} >{cat.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListCategory;