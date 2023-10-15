import { Link } from "react-router-dom";

import "./LayoutSiteStyle.css"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <h3 className="widget-title">About Us</h3>
              <p>We are a company that specializes in providing the best quality products and amazing customer service.</p>
              <div className="social-links">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <h3 className="widget-title">Contact Info</h3>
              <p>BRVT huyện Châu Đức</p>

            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <h3 className="widget-title">Mở rộng</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Google</a></li>
                <li><a href="#">Zalo</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="widget">
              <h3 className="widget-title">Newsletter</h3>

              <form className="newsletter-form">
                <input type="email" name="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
}

export default Footer;