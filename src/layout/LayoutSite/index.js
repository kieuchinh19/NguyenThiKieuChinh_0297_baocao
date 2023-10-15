import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './LayoutSiteStyle.css';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Copyright from './Copyright';

function LayoutSite() {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
            <Footer />
            <Copyright />
        </>
    );
}

export default LayoutSite;