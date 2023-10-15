import { urlImage } from "../../../config";

function CSAnToanTP() {
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
                            <h2><i>Chính sách an toàn thực phẩm</i></h2>
                        </div>
                        <div className="content">
                            <div className="img text-center mb-3">
                                <img src={urlImage + "logo/csantp.jpg"} alt="" className="img-fluid" />
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

export default CSAnToanTP;