import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import categoryservice from "../../../services/CategoryServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";


function CategoryList() {
    const [statusdel,setStatusDel]=useState(0);

    const[categorys,setCategory]=useState([]);
    useEffect(function(){
        (async function(){
            await categoryservice.getAll().then(function(result)
            {
                setCategory(result.data.categorys)
            });
        })();
    },[statusdel])

    function categoryDelete(id){
        categoryservice.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        })
    }

    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">DANH MỤC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/category/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"30"}} className="text-center">#</th>
                            <th style={{width:"120"}} className="text-center">Hình</th>
                            <th style={{width:"100"}} className="text-center">Tên danh mục</th>
                            <th className="text-center">Parent_id</th>
                            <th className="text-center">Slug</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"30"}} className="text-center">Status</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map(function(category,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">
                                    <img src={urlImage+'category/'+category.image} style={{width:"120px",height:"120px"}} className="img-fluid" alt="hing.png"/>
                                </td>
                                <td className="text-center">{category.name}</td>
                                <td className="text-center">{category.parent_id}</td>
                                <td className="text-center">{category.slug}</td>
                                <td className="text-center">{category.created_at}</td>
                                <td className="text-center">{category.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/category/show/"+category.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/"+category.id}><FiEdit/></Link>
                                    <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger"><FiTrash2/></button>
                                </td>
                                <td className="text-center">{category.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default CategoryList;
