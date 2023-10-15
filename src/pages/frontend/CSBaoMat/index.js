import { urlImage } from "../../../config";

function CSBaoMat() {
    return (
        <section className="">
            {/* <div style={{ height:40, background: "#f2f2f2" }}>
                <div className="container">
                    <div class="d-inline-flex inline-ct mt-2 ms-5">
                        <p class="m-0"><Link className="Link-contact" style={{textDecoration:"none"}} to="/">Trang chủ</Link></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Chính sách vận chuyển</p>
                    </div>

                </div>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title mt-3 text-center">
                            <h2><i>Chính sách bảo mật thông tin khách hàng</i></h2>
                        </div>
                        <div className="content">
                            <div className="img text-center mb-3">
                                <img src={urlImage + "logo/chinh-sach-bao-mat.jpg"} alt="" className="img-fluid" />
                            </div>
                            <div className="content">
                                <div className="item">
                                    <h6>Mục đích thu thập thông tin cá nhân</h6>
                                    <p>thu thập các thông tin trên website bao gồm: họ tên, email, số điện thoại, địa chỉ. Những thông tin này khách hàng phải cung cấp khi mua hàng nhằm bảo quyền lợi của người tiêu dùng.</p>
                                    <ul>
                                        <i>Việc thu thập thông tin qua website parisgateaux.vn sẽ giúp chúng tôi:</i>
                                        <li>Nắm bắt được các nguyện vọng, mong muốn của khách hàng nhằm cải tiến, nâng cao chất lượng dịch vụ.</li>
                                        <li>Giúp quý khách hàng cập nhật các chương trình khuyến mại, giảm giá...do Paris Gâteaux tổ chức sớm nhất và nhanh nhất.</li>
                                        <li>Hỗ trợ khách hàng khi có khiếu nại, ý kiến một cách nhanh nhất.</li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <h6>Phạm vi sử dụng thông tin khách hàng</h6>
                                    <ul>
                                        <i>sử dụng thông tin khách hàng cung cấp trong phạm vi nội bộ để:</i>
                                        <li>Cung cấp các dịch vụ và sản phẩm cho khách hàng.</li>
                                        <li>Xử lý các giao dịch mua bán sản phẩm và tạo điều kiện thuận lợi cho các chức năng của trang web, các ứng dụng di động của chúng tôi.</li>
                                        <li>Liên hệ, tiếp nhận và giải quyết khiếu nại cho khách hàng trong những trường hợp đặc biệt.</li>
                                        <li>Thực hiện quảng bá sản phẩm, dịch vụ và gửi các chương trình khuyến mãi của Paris Gâteaux.</li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <h6>Thời gian lưu trữ thông tin</h6>
                                    <ul>
                                        <li>Dữ liệu cá nhân của khách hàng sẽ được lưu trữ trong hệ thống của Paris Gâteaux cho đến khi quý khách hàng có yêu cầu hủy bỏ.</li>
                                        <li>Trong trường hợp thông tin của quý khách hàng bị nghi ngờ là giả mạo, vi phạm quy định thì thông tin đó sẽ bị xóa.</li>
                                    </ul>
                                </div>

                                <div className="item">
                                    <h6>Cam kết bảo mật thông tin cá nhân của khách hàng</h6>
                                    <p>Dữ liệu cá nhân của khách hàng được cam kết bảo mật tuyệt đối theo chính sách bảo mật đã đề ra. Việc thu thập và sử dụng thông tin khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng trừ trường hợp pháp luật có quy định khác.</p>
                                    <p>Chúng tôi cam kết không cố ý tiết lộ thông tin khách hàng, không bán hoặc chia sẻ thông tin vì mục đích thương mại cho bên thứ 3.</p>
                                    <p>Trong trường hợp máy chủ lưu trữ thông tin của công ty bị hacker tấn công dẫn đến mất mát dữ liệu của khách hàng, chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng để điều tra xử lý kịp thời và thông báo cho khách hàng trong thời gian sớm nhất.</p>
                                    <p>Công ty yêu cầu các khách hàng khi liên hệ tới công ty phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa chỉ liên lạc, email và chịu trách nhiệm về tính pháp lý của những thông tin trên. Công ty chịu trách nhiệm và không giải quyết các khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu xét thấy tất cả thông tin cung cấp lúc ban đầu là không chính xác.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="title-new mt-3 text-center">
                            <h5>BÀI VIẾT MỚI NHẤT</h5>
                        </div>
                        <div className="content-new">
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="img">asdf</div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="nd">asdf</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default CSBaoMat;