
export default function Footer() {
    return (
        <footer className="ft">
            <div className="ft-wrap">
                <div className="container">
                <div className="ft-flex ">
                    <div className="ft-col">
                        <div className="ft-list">
                            <a className="ft-item" href="/">
                                <span className="icon">
                                    <img src="call.svg" alt="" />
                                </span>
                                <span className="txt">Call us: +84 908 02 02 58</span>
                            </a>
                            <a className="ft-item" href="/">
                                <span className="icon">
                                    <img src="email.svg" alt="" />
                                </span>
                                <span className="txt">Email: chucinog@gmail.com</span>
                            </a>
                        </div>
                    </div>
                    <div className="ft-col ft-col-right">
                        <span className="ft-col-txt">Follow us</span>
                        <div className="ft-social">
                            <a className="ft-item" href="/">
                                <span className="icon">
                                    <img src="fb.svg" alt="" />
                                </span>
                            </a>
                            <a className="ft-item" href="/">
                                <span className="icon">
                                    <img src="ig.svg" alt="" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </footer>
    );
  }
  