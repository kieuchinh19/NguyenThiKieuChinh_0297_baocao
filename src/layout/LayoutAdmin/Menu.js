import { Link } from "react-router-dom";

function Menu() {
    return (
        <section className="col-2">
            <div className="bg-primary mt-2 mb-2">
                <ul class="navbar-nav">
                    <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                        <i class="fas fa-laugh-wink text-white"></i>
                        <div class="text-white mx-3 fs-5">SB Admin <sup>2</sup></div>
                    </Link>
                    {/* <hr class="sidebar-divider my-2" />

                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/contact">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý Contact</span>
                        </Link>
                    </li> */}
                    {/* <hr class="sidebar-divider my-2" />
                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/menu">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý Menu</span>
                        </Link>
                    </li> */}
                    <hr class="sidebar-divider my-2" />
                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/order">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý Đơn Hàng</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider my-2" />
                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/post">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý Post</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider my-2" />
                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/slider">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý Slider</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider my-2" />
                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/topic">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý Topic</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider my-2" />

                    <li class="nav-item">
                        <Link class="nav-link collapsed text-white" to="/admin/user">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Quản Lý User</span>
                        </Link>
                    </li>
                    <hr class="sidebar-divider my-0" />
                </ul>

            </div>
        </section>
    );
}

export default Menu;