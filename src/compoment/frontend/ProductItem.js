import { Link } from "react-router-dom";
import { urlImage } from "../../config";
import "./style.css"


function ProductItem(props) {
    return (
        <div className="col-md-3 mb-3">
            <div className="product-item border">
                <div className="product-image">
                    <img
                    className="img-fluid"
                    src={urlImage+"product/"+props.product.image}
                    alt="sp"/>
                    <Link to={"/chi-tiet-san-pham/" + props.product.slug}><img style={{ height: 210, width: 310 }} src={urlImage + 'product/' + props.product.image} className="img-fluid" alt="san pham" /></Link>
                </div>
                <div className="Product-name p-2">
                    <Link style={{ textDecoration: 'none' }} to={"/chi-tiet-san-pham/" + props.product.slug}><h3 className="text-center fs-6 text-danger">{props.product.name}</h3></Link>
                </div>
                <div className="Product-price">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-center">
                                <strong className="text-danger fs-4">{props.product.price_sale}.000<sup>đ</sup></strong>
                            </div>
                            <div className="text-center">
                                <del className="fs-6">{props.product.price}.000</del><sup>đ</sup>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="text-center add-cart">
                                <Link className="btn btn-warning">Mua ngay</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}


export default ProductItem;