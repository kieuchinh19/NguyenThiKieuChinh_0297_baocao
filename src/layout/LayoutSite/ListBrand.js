import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandservice from "../../services/BrandServices";
import "./style.css"

function ListBrand() {
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await brandservice.getAll();
                setBrands(result.data.brands)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);

    return (
        <div style={{background:"#ffeee6"}} className="listbrand mb-5">
            <h3 style={{background:"#ff9966"}} className="p-3 m-0 text-center">Thương hiệu</h3>

            <ul className="pb-2">

                {brands.map(function (brand, index) {
                    return (
                        <li key={index}>
                            <Link className="list" to={"/thuong-hieu/" + brand.slug} >{brand.name}</Link>
                        </li>
                    );
                })}


            </ul>
        </div>
    );
}

export default ListBrand;