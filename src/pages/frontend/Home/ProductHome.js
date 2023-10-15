import { useEffect, useState } from "react";
import ProductItem from "../../../compoment/frontend/ProductItem"
import productservice from "../../../services/ProductServices";
import { Link } from "react-router-dom";

function ProductHome(props) {
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getProductHome(4, props.category.id).then(function (result) {
                setProducts(result.data.products);
            });
        })();
    },[]);

    if(products.length!==0) {
        return (
            <div className="container my-3">
                <div className="product-category">
                    <h3 className="text-center text-danger">{props.category.name}</h3>
                    <div className="row">
                        {products.map(function (product, index) {
                            return <ProductItem product={product} key={index} />;
                        })}
                    </div>
                    <div className="text-center my-3">
                        <Link to={"san-pham/" + props.category.slug} className="btn btn-success">Xem thêm</Link>
                    </div>
                </div>
            </div> 
        );
    }
}

export default ProductHome;
// function ProductHome() {
//     return ( 
//         <h1>hello</h1>
//      );
// }

// export default ProductHome;