import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import brandservice from "../../../services/BrandServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";

function BrandList() {
    const [statusdel,setStatusDel]=useState(0);
    const[brands,setBrand]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getAll().then(function(result)
            {
                setBrand(result.data.brands)
            });
        })();
    },[statusdel])

    // xoa
    function brandDelete(id){
        brandservice.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        })
    }
    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/brand/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"30"}} className="text-center">#</th>
                            <th style={{width:"130"}} className="text-center">Hình</th>
                            <th className="text-center">Tên thương hiệu</th>
                            <th className="text-center">Slug</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(function(brand,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">
                                    <img style={{width:"120px",height:"120px"}} className="img-fluid" src={urlImage+'brand/'+brand.image} alt="hing.png"/>
                                </td>
                                <td className="text-center">{brand.name}</td>
                                <td className="text-center">{brand.name}</td>
                                <td className="text-center">{brand.created_at}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/brand/show/"+brand.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/"+brand.id}><FiEdit/></Link>
                                    <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger"><FiTrash2/></button>
                                </td>
                                <td className="text-center">{brand.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default BrandList;