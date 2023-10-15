import ProductItem from "../../../compoment/frontend/ProductItem";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productservice from "../../../services/ProductServices";
import { urlImage } from "../../../config";


function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProductOther(result.data.product_other);
                }
            });
        })();
    }, [slug]);


    const [qty,setQty]=useState(1);
    return (
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + 'product/' + product.image} alt={product.name} className="img-fluid w-100" />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2>{product.name}</h2>
                        </div>
                        <div>
                            <h5>Giá: {product.price}.000đ</h5>
                        </div>
                        <div>
                            <p>Mô tả: {product.metadesc}</p>
                        </div>
                        <div className="">
                            {/* <div class="soluong show">
                                <div class="label_sl margin-bottom-5">Số lượng:</div>
                                <buttom className="btn btn-info" type="submit" onClick={()=>setQty(qty + 1)}>+</buttom>
                                <input className=""  style={{width:40}} type="number" value={qty} />
                                <buttom className="btn btn-secondary" type="submit"onClick={()=>setQty(qty - 1)}>-</buttom>
                            </div> */}

                            <div class="quantity-area clearfix">
								<input style={{width:35,height:35}} type="button" value="-" onClick={()=>setQty(qty - 1)} class="border" />
								<input style={{width:35,height:35}} type="text" id="quantity" name="quantity" value={qty} min="1" class="border quantity-selector text-center" />
								<input style={{width:35,height:35}} type="button" value="+" onClick={()=>setQty(qty + 1)} class="border" />
							</div>








                        </div>
                        <div className="mt-4">
                            <button className="btn btn-info me-2" type="submit">Thêm vào giỏ hàng</button>
                            <button className="btn btn-danger" type="submit">Mua ngay</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 m-2">{product.detail}</div>
                </div>
                <div className="row mt-2 border"></div>
                <div className="row mt-2">
                    <div className="text-center m-3">
                        <h3 className="text-danger">CÓ THỂ BẠN SẼ THÍCH</h3>
                        <h4>Sản phẩm cùng loại</h4>
                    </div>
                    {product_other.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}
                </div>

            </div>

        </section>

    );
}

export default ProductDetail;