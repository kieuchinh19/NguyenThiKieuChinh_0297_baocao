import { useEffect, useState } from "react";
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import ContactServices from "../../../services/ContactServices";

function ContactCreate() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(0);
    async function ContactStore(event) 
    {
        event.preventDefault();
        const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("name",name);
        contact.append("metakey",metakey);
        contact.append("metadesc",metadesc);
        contact.append("sort_order",sort_order);
        contact.append("status",status);
        if (image.files.length===0)
        {
            contact.append("image","");
        }
        else
        {
            contact.append("image",image.files[0]);
        }

        await ContactServices.create(contact).then(function(result){
            alert(result.data.message);
            navigate("/admin/contact",{replace: true});
        });
    }
    const [Contacts, setContacts] = useState([]);
    useEffect(function(){
        (async function(){
            await ContactServices.getAll().then(function(result){
                setContacts(result.data.Contacts);
            });
        })();
    },[]);
    return (
        <form method="post" onSubmit={ContactStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-primary">
                                Thêm Liên hệ
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn btn-info btn-sm me-2" to="/admin/contact">
                                <FaArrowLeft /> Quay về danh sách
                            </Link>
                            <button type="submit" className="btn btn-sm btn-success">
                                <FaSave /> Lưu
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">
                                    <strong>Tên Liên hệ</strong>
                                </label>
                                <input type="text" name="name"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metakey">
                                    <strong>Từ khóa</strong>
                                </label>
                                <textarea name="metakey"
                                    value={metakey} onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control">
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea name="metadesc"
                                    value={metadesc} onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control">
                                </textarea>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="sort_order">
                                    <strong>Sắp xếp</strong>
                                </label>
                                <select name="sort_order"
                                    value={sort_order} onChange={(e) => setSortOrder(e.target.value)}
                                    className="form-control">
                                    <option value="0">None</option>
                                    {Contacts.map(function(c,index){
                                        return(<option key={index} value={c.sort_order+1}>Sau: {c.name}</option>);
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">
                                    <strong>Hình ảnh</strong>
                                </label>
                                <input type="file" name="image" id="image"
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">
                                    <strong>Trạng thái</strong>
                                </label>
                                <select name="status"
                                    value={status} onChange={(e) => setStatus(e.target.value)}
                                    className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ContactCreate;