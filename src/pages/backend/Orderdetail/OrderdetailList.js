import{Link } from "react-router-dom"
import { FaPlus, FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import ListOrderdetail from "../../../datatest/Orderdetail.json";





function OrderdetailList() {
    const Orderdetails= ListOrderdetail.orderdetails
    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Chi Tiết Đặt Hàng</strong>
                    </div>
                <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-success" to="/admin/orderdetail/create">
                        <FaPlus/>Thêm
                        </Link>
                </div>
                </div>
            </div>
            <div className="card-header">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hình</th>
                            <th>Tên Chi Tiết</th>
                            <th>Slug</th>
                            <th>Ngày tạo </th>
                            <th>Chức năng </th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Orderdetails.map(function(Orderdetail,index){
                            return(
                                <tr key={index}>
                            <td>
                                <input type="checkbox"/>
                            </td>
                            <td>
                                <img src="" alt="hinh.png"className="img-fluid"/>
                            </td>
                            <td>
                                Tên Chi Tiết
                            </td>
                            <td>
                                ten-chi-tiet
                            </td>
                            <td>ngay tao</td>
                            <td>
                                <Link className="btn btn-sm btn-info me-1" to={"/admin/orderdetail/show/1"}>
                                    <FaRegEye/>
                                </Link>
                                <Link className="btn btn-sm btn-primary me-1" to={"/admin/orderdetail/update/1"}>
                                    <FaEdit/>
                                </Link>
                                <button className="btn btn-sm btn-danger">
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                            );
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
            
     );
}

export default OrderdetailList;