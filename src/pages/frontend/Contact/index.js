import { Link } from "react-router-dom";

function Contact() {
    return (
        <section class="myfooter bg-dark text-white py-3">

            <div class="container">
                <h3 className="text-center mb-4 text-danger"> LIÊN HỆ </h3>
                <div class="row">
                    <div class="col-md-3 text-warning bg-dark">
                        <h5 >TÀI KHOẢN</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-warning bg-dark">
                        <h5>CHÍNH SÁCH</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-warning bg-dark">
                        <h5>ĐIỀU KHOẢN</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-warning bg-dark">
                        <h5>LIÊN HỆ</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>

                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <Link>


                        </Link>
                        <div class="address"><b>Địa chỉ:</b>
                            Suối Nghệ, huyện Châu Đức, tỉnh BRVT
                        </div>
                        <div class="phone"><b>Hotline:</b>

                            <Link href="tel:19006750" title="Phone">09876655</Link>
                        </div>
                        <div class="email"><b>Email:</b>

                            <Link href="mailto:support@sapo.vn">chinh39@gmail.com</Link>
                        </div>
                        <div class="clock">Mở của từ 7:00 sáng đến 22:00 tối

                        </div>

                    </div>

                    <div class="col-md-6 text-warning bg-dark">
                        <h5>NHẬN TIN KHUYẾN MÃI</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email của bạn" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text text-white bg-danger" id="basic-addon2">Đăng kí</span>
                        </div>
                        <div class="col-mb-3 text-warning bg-dark border border-warning border border-2  ">
                            <div className="contact-form">
                                <form>
                                    {/* Contact Detail */}
                                    <div className="form-detail">
                                        {/* Input Name */}
                                        <div className="row">
                                            <div className="col my-3">
                                                <input type="text" className="form-control" placeholder="Fisrt Name" />
                                            </div>
                                            <div className="col my-3">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        {/* Email Address */}
                                        <div className="form-input">
                                            <input type="text" className="form-control" placeholder="Email Address" />
                                        </div>
                                        {/* Message */}
                                        <div className="form-input my-3">
                                            <textarea className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    {/* Contact Button */}
                                    <div className="form-button my-3">
                                        <button type="button" class="btn btn-outline-warning  ">Send</button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </section>
    );
}

export default Contact;