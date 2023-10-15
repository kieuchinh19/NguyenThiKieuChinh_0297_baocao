import { Link,useNavigate,useParams } from "react-router-dom";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";
import categoryservice from "../../../services/CategoryServices";
import { useEffect, useState } from "react";
import {urlImage} from "../../../config"


function CategoryShow() {
    const {id}=useParams("id");
    const navigate = useNavigate(); // chuyen trang

    const[category,setCategory]=useState([]);
    useEffect(function(){
        (async function(){
            await categoryservice.getById(id).then(function(result)
            {
                setCategory(result.data.category)
            });
        })();
    },[])
    // lay danh sach
    //     const [categorys, setCategorys] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await categoryservice.getAll().then(function (result) {
    //             setCategorys(result.data.categorys)
    //         });
    //     })();
    // }, [])
    function categoryDelete(id){
        categoryservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/category',{replace:true});
        })
    }


    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT DANH MỤC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/"+category.id}><FiEdit/>Sửa</Link>
                        <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger me-1"><FiTrash2/>Xóa</button>
                        <Link to="/admin/category" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{width:200}}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{category.id}</td>
                        </tr>
                        <tr>
                            <th>Tên danh mục</th>
                            <td>{category.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{category.slug}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={urlImage+'category/'+category.image} alt="hình" className="img-fluid" style={{maxWidth:200}} />
                            </td>
                        </tr>
                        <tr>
                            <th>Parent Id</th>
                            <td>{category.parent_id}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{category.status}</td>
                        </tr>
                        <tr>
                            <th>Sắp xếp</th>
                            <td>{category.sort_order}</td>
                        </tr>
                        <tr>
                            <th>Từ khóa</th>
                            <td>{category.metakey}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{category.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{category.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryShow;