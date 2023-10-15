import { urlImage } from "../../../config";

function CSVanChuyen() {
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
                            <h2><i>Chính sách vận chuyển</i></h2>
                        </div>
                        <div className="content">
                            <div className="img text-center mb-3">
                                <img src={urlImage + "logo/xe.jpg"} alt="" className="img-fluid" />
                            </div>
                            <div className="">
                                <ul>
                                    <li>Toàn bộ đơn hàng được áp dụng vận chuyển qua bên đối tác thứ 3, đảm bảo quyền lợi và yêu cầu của khách hàng.</li>
                                    <li>Đơn hàng nội thành Hà Nội và TP Hồ Chí Minh: Giao trong ngày kể từ thời điểm chốt đơn hoặc thời gian hẹn trước. </li>
                                    <li>Khách hàng sẽ được kiểm tra sản phẩm thuộc đơn hàng của mình trước khi hoàn tất nhận hàng từ bên giao hàng.</li>
                                    <li>Thời gian giao hàng có thể chậm hơn dự kiến vì một số lý do như: Địa chỉ khách hàng không đúng, khách hàng không có ở nhà, nhân viên giao hàng không liên hệ được với khách hàng, thiên tai, hỏa hoạn, ...</li>
                                    <li>Trường hợp đã quá số thời gian dự kiến mà khách hàng chưa nhận được hàng, vui lòng phản hồi lại để chúng tôi có biện pháp khắc phục nhanh nhất. Trong thời gian chờ hàng nếu Quý khách muốn thay đổi đơn hàng (Thay đổi sản phẩm, Không muốn nhận hàng nữa,...) mà bên dịch vụ chưa phát khách hàng, vui lòng thông báo lại để chúng tôi giải quyết với bên dịch vụ chuyển phát.</li>
                                    <li>Thương nhân, tổ chức cung ứng dịch vụ vận chuyển có trách nhiệm về chứng từ hàng hóa trong quá trình giao nhận hàng hóa cho Khách hàng.</li>
                                </ul>
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

export default CSVanChuyen;