import Products from "../pages/frontend/Product"
import Home from "../pages/frontend/Home"
import Contact from "../pages/frontend/Contact"
import News from "../pages/frontend/News"
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import Introduce from "../pages/frontend/Introduce";
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductBrand from "../pages/frontend/ProductBrand";
import CSVanChuyen from "../pages/frontend/CSVanChuyen";
import CSDoiTra from "../pages/frontend/CSDoiTra";
import NewsDetail from "../pages/frontend/News/NewsDetail";
import PostTopic from "../pages/frontend/PostTopic";
import CSBaoMat from "../pages/frontend/CSBaoMat";
import CSAnToanTP from "../pages/frontend/CSAnToanTP";

const RouterPublic = [
    {path:'/',component:Home},
    {path:'/san-pham',component:Products},
    {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    {path:'/danh-muc-san-pham/:slug',component:ProductCategory},
    {path:'/thuong-hieu/:slug',component:ProductBrand},
    {path:'/lien-he',component:Contact},
    {path:'/tin-tuc',component:News},
    {path:'/gioi-thieu',component:Introduce},
    {path:'/chinh-sach-van-chuyen',component:CSVanChuyen},
    {path:'/chinh-sach-doi-tra',component:CSDoiTra},
    {path:'/chinh-sach-an-toan-thuc-pham',component:CSAnToanTP},
    {path:'/chinh-sach-bao-mat',component:CSBaoMat},
    {path:'/chi-tiet-bai-viet/:slug',component:NewsDetail},
    {path:'/tin-tuc/:slug',component:PostTopic},


    
];
export default RouterPublic;