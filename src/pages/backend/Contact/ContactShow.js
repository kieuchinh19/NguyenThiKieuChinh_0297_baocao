import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContactServices from "../../../services/ContactServices";

function ContactShow() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contact, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await ContactServices.getById(id).then(function (result) {
                setContact(result.data.Contact);
            });
        })();
    }, []);
    async function ContactDelete(id) {
        await ContactServices.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/Contact', { replace: true });
        });
    }

    return (<div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col-md-6">
                    <strong className="text-primary">
                        Chi tiết liên hệ
                    </strong>
                </div>
                <div className="col-md-6 text-end">
                    <Link className="btn btn-info btn-sm me-2" to="/admin/contact">
                        <FaArrowLeft /> Quay về danh sách
                    </Link>
                    <Link className="btn btn-info btn-sm me-2" to={"/admin/contact/update/" + contact.id}>
                        <FaArrowLeft /> Cập nhật
                    </Link>
                    <button onClick={() => ContactDelete(contact.id)} className="btn btn-danger btn-sm">
                        <FaArrowLeft /> Xóa
                    </button>
                </div>
            </div>
        </div>
        <div className="card-body">
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th style={{ width: 200 }}>Tên trường</th>
                        <th >Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{contact.id}</td>
                    </tr>
                    <tr>
                        <th>Tên Khách hàng</th>
                        <td>{contact.name}</td>
                    </tr>
                    <tr>
                        <th>Slug</th>
                        <td>{contact.slug}</td>
                    </tr>
                    <tr>
                        <th>Từ khóa</th>
                        <td>{contact.metakey}</td>
                    </tr>
                    <tr>
                        <th>Mô tả</th>
                        <td>{contact.metadesc}</td>
                    </tr>
                    <tr>
                        <th>Trạng thái</th>
                        <td>{contact.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default ContactShow;