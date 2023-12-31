import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FaSearch, FaShoppingBag, FaPhoneAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from "react-icons/bs";

import "./HeaderStyle.css"
import "./LayoutSiteStyle.css"

function Headers() {
    return (
        <section className="myheader">
            <div className="container py-3">
                <div className="row ">
                    <div className="col-md-2">
                        <Link>
                            <img src={Logo} className="float-left" height="110" width="120" alt="Logo" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="input-group mb-3 p-2">
                            <input type="text" className="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-1 text-danger"><i className="fa-solid fa-phone"></i></div>
                                    </div>
                                    <div className="col-9">
                                        Tư vấn hỗ trợ<br />
                                        <FaPhoneAlt/>
                                        <strong className="text-danger">098745633</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-1 text-danger"><i className="fa-regular fa-circle-user"></i></div>
                                    </div>
                                    <div className="col-9">
                                        Xin chào<br />
                                        <strong className="text-danger">Đăng nhập</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <div className="row">
                            <div className="col">

                                <FaShoppingBag />
                                <Link href="#" className=" position-relative">
                                    <span className="fs-2"><i className="fa-solid fa-bag-shopping"></i></span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Headers;