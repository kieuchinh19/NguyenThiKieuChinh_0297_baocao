import Slidershow from "./SlideShow";


import productData from "../../../datatest/product.json";
import ProductItem from "../../../compoment/frontend/ProductItem";
function Home() {
  const listProduct = productData.data;
  const saleProduct = productData.data1;
  const newProduct = productData.data2;
  return (
    <section className="maincontent py-4">

      <div className="slide">
        <Slidershow />
      </div>
      <div className="container my-3">
        <div className="product-category">
          <h1 className="text-center text-danger md-3 py-2">SẢN PHẨM HOT</h1>
          <div className="row">
            {listProduct.map(function (product, index) {
              return <ProductItem product={product} key={index} />
            })}

          </div>
        </div>
      </div>

      {/** saleproduct **/}

      <div className="container my-3">
        <div className="product-category">

          <h1 className="text-center text-danger md-3 py-2">Sản Phẩm Sales</h1>
          <div className="row">
            {saleProduct.map(function (product, index) {
              return <ProductItem product={product} key={index} />
            })}

          </div>
        </div>
      </div>
      {/** sellingproduct **/}
      <div className="container my-3">
        <div className="product-category">
          <h1 className="text-center text-danger md-3 py-2">Sản Phẩm Bán Chạy</h1>
          <div className="row">
            {newProduct.map(function (product, index) {
              return <ProductItem product={product} key={index} />
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;