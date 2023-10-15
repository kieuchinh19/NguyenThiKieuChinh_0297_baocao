import productData from "../../../datatest/product.json";
import ProductItem from "../../../compoment/frontend/ProductItem";

function Product() {
    const listProduct = productData.data;
    return (
        <section className="maincontent my-3">
            <div className="container">
                <h3 className="text-center text-danger">TẤT CẢ SẢN PHẨM</h3>
                <div className="row">
                    {listProduct.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}
                </div>
            </div>
        </section>
    );
}
export default Product;