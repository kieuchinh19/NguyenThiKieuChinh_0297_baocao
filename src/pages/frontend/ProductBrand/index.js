import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../../compoment/frontend/ProductItem";
import ListBrand from "../../../layout/LayoutSite/ListBrand";
import ListCategory from "../../../layout/LayoutSite/ListCategory";
import brandservice from "../../../services/BrandServices";
import productservice from "../../../services/ProductServices";

function ProductBrand() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const response = await brandservice.getBySlug(slug);
                const brandid = response.data.brand.id;
                setTitle(response.data.brand.name);
                const response2 = await productservice.getProductByBrandId(brandid, limit);
                setProducts(response2.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug]);

    return (
        <section className="maincontent ">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <ListCategory />
                        <ListBrand />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center text-danger">{title}</h3>
                        <div className="row">
                            {products.map(function (product, index) {
                                return <ProductItem product={product} key={index} />
                            })}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-success" onClick={() => setLimit(limit + 4)} >Xem thêm</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section >

    );
}

export default ProductBrand;