import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="header-wrapper">
          <div className="container">
            <div className="header-wrap">
              <div className="header-burger">
                <div className="hamburger" id="hamburger"><i className="fa-solid fa-regular fa-bars"></i></div>
              </div>
              <div className="header-logo"><a className="custom-logo-link" href="" rel="home">
                <img className="header-logo-image" width="156" height="142" src="logo.svg" alt="" decoding="async" loading="lazy"/>
                </a></div>
                <div className="header-lg">
                    <span className="icon">
                        <img src="vn.svg" alt="" />
                    </span>
                    <span className="icon">
                        <img src="eng.svg" alt="" />
                    </span>
                </div>
              <div className="header-gr">
                <nav className="header-nav">
                  <div className="menu">
                    <div className="menu-nav">
                      <ul className="menu-list" id="menu-primary">
                        <li className="menu-item dropdown current-menu-item page_item current_page_item"><a className="menu-link" href="">Promotion</a>
                        </li>
                        <li className="menu-item dropdown">  <a className="menu-link" href="">Flight Schedule</a>
                        </li>
                        <li className="menu-item"> <a className="menu-link" href="">About us</a></li>
                        <li className="menu-item"><a className="menu-link" href="">Payment Guide</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="header-control">
                    <button className="btn btn-white">
                        <span className="text">
                            Booking now
                        </span>
                    </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mobile-overlay"></div>
          <div className="mobile">
            <div className="mobile-con">
              <div className="mobile-close"> <i className="fa-solid fa-xmark"></i></div>
              <div className="mobile-logo"> <a className="custom-logo-link" href="" rel="home"><img className="header-logo-image" width="156" height="142" src="assets/images/logo.png" alt="" decoding="async" loading="lazy"></a></div>
              <div className="mobile-wr">
                <div className="mobile-nav">
                  <div className="header-lg">
                    <div className="header-lg-top"> <a className="link active" href="">VN<i className="fa-light fa-chevron-down"></i></a></div>
                    <div className="header-lg-inner"> <a className="link" href="">EN</a></div>
                  </div>
                  <ul className="menu-list" id="menu-primary">
                    <li className="menu-item dropdown current-menu-item page_item current_page_item"><a className="menu-link" href="">Sybazzar</a>
                      <ul className="menu-list">
                        <li className="menu-item"> <a className="menu-link" href="">Sybazzar 1</a></li>
                        <li className="menu-item"> <a className="menu-link" href="">Sybazzar 2</a></li>
                      </ul>
                    </li>
                    <li className="menu-item dropdown">  <a className="menu-link" href="">Sản phẩm</a>
                      <ul className="menu-list">
                        <li className="menu-item"> <a className="menu-link" href="">Sybazzar 1</a></li>
                        <li className="menu-item"> <a className="menu-link" href="">Sybazzar 2</a></li>
                      </ul>
                    </li>
                    <li className="menu-item"> <a className="menu-link" href="">Bài viết</a></li>
                    <li className="menu-item"><a className="menu-link" href="">Liên hệ</a></li>
                  </ul>
                </div>
              </div>
              <div className="mobile-info">
                <ul className="menu"> 
                  <li className="menu-item"><span className="fw-7">Trụ sở chính: </span><a className="menu-link">
                       Xóm 2, Thôn Bắc, Xã Kim Nỗ, Huyện Đông Anh, Thành phố Hà Nội, Việt Nam.</a></li>
                  <li className="menu-item"><span className="fw-7">Phone: </span><a className="menu-link">
                       024.3787.8718</a></li>
                  <li className="menu-item"><span className="fw-7">Gmail: </span><a className="menu-link">
                       marketing.sybazzarvn@gmail.com</a></li>
                </ul>
                <div className="footer-social"> <a className="footer-social-link"><img src="./assets/images/fb.svg" alt=""/></a><a className="footer-social-link"><img src="./assets/images/ig.svg" alt=""/></a><a className="footer-social-link"><img src="./assets/images/in.svg" alt=""/></a><a className="footer-social-link"><img src="./assets/images/tw.svg" alt=""/></a></div>
              </div>
            </div>
          </div> */}
        </div>

      </header>
    );
  }
  