import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import brandservice from "../../../services/BrandServices";
import { FiRotateCcw} from "react-icons/fi";


function BrandUpdate() {
    const navigate = useNavigate(); // chuyen trang

    const [name, setName] = useState('');    
    const [sort_order, setSortOrder] = useState(0);
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);
    // lay id
    const {id}=useParams("id");
    //lay du lieu
    useEffect(function(){
        (async function(){
            await brandservice.getById(id).then(function(result){
                const data = result.data.brand;
                setName(data.name);
                setMetadesc(data.metadesc);
                setMetakey(data.metakey);
                setSortOrder(data.sort_order);
                setStatus(data.status);

            });
        })();
    },[])
    //lay danh sach
    const[brands,setBrand]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getAll().then(function(result)
            {
                setBrand(result.data.brands)
            });
        })();
    },[])
    // ham cap nhat
    async function brandEdit(event){
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name",name);
        brand.append("metadesc",metadesc);
        brand.append("metakey",metakey);
        brand.append("sort_order",sort_order);
        brand.append("status",status);
        if (image.files.length === 0) {
            brand.append("image", "")
        }
        else {
            brand.append("image", image.files[0]);
        }
        await brandservice.update(brand,id).then(function(res){
            alert(res.data.message);
            navigate('/admin/brand',{replace:true});
        })

    }
    return (
        <form onSubmit={brandEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Chỉnh sửa thương hiệu
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info"><FiRotateCcw/>Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">

                            <div className="md-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select onChange={(e) => setSortOrder(e.target.value)} value={sort_order} name="sort-order" className="form-control">
                                    <option value="0">None</option>
                                    {brands.map(function (br, index) {
                                        return (
                                            <option key={index} value={br.sort_order + 1}>Sau:{br.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình thương hiệu</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
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

export default BrandUpdate;