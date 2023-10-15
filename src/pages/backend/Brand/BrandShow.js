import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";
import brandservice from "../../../services/BrandServices";

function BrandShow() {
    const navigate = useNavigate(); // chuyen trang

    const {id} = useParams("id")
    const [brand,setBrand]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getById(id).then(function(result){
                setBrand(result.data.brand)
            })
        })()
    },[])

    function brandDelete(id){
        brandservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/brand',{replace:true});
        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/" + brand.id}><FiEdit />Sửa</Link>
                        <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/brand" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th> 
                            <td>{brand.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{brand.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{brand.slug}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={urlImage + 'brand/' + brand.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{brand.status}</td>
                        </tr>
                        <tr>
                            <th>Sắp xếp</th>
                            <td>{brand.sort_order}</td>
                        </tr>
                        <tr>
                            <th>Từ khóa</th>
                            <td>{brand.metakey}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{brand.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{brand.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default BrandShow;