import { Link } from "react-router-dom"
import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from "react";
import ContactServices from "../../../services/ContactServices";


function ContactList() {
    const [Contacts, setContacts] = useState([]);
    const [statusdel, setStatuesDel] = useState([0]);
    useEffect(function () {
        (async function () {
            await ContactServices.getAll().then(function (result) {
                setContacts(result.data.Contacts);
            })
            
        })();
    }, [statusdel]);
    async function ContactDelete(id) {
        await ContactServices.remove(id).then(function (result) {
            alert(result.data.message);
            setStatuesDel(result.data.id);
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Liên hệ</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/contact/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-header">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="text-center">Tên khách hàng</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Mã khách hàng </th>
                            <th className="text-center">Điện thoại</th>
                            <th className="text-center">Tiêu đề </th>
                            <th className="text-center">Nội dung </th>
                            <th className="text-center">Ngày tạo </th>
                            <th className="text-center">chức năng </th>
                            <th className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Contacts.map(function (Contact, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">{Contact.name}</td>
                                    <td className="text-center">{Contact.email}</td>
                                    <td className="text-center">{Contact.user_id}</td>
                                    <td className="text-center">{Contact.phone}</td>
                                    <td className="text-center">{Contact.title}</td>
                                    <td className="text-center">{Contact.content}</td>
                                    <td className="text-center">{Contact.created_at}</td>

                                    <td className="text-center"> 
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/contact/show/"+Contact.id}>
                                            <FaRegEye />
                                        </Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+Contact.id}>
                                            <FaEdit />
                                        </Link>
                                        <button onClick={()=>ContactDelete(Contact.id)} className="btn btn-sm btn-danger">
                                            <FaTrash />
                                        </button>
                                    </td>
                                    <td className="text-center">{Contact.id}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContactList;