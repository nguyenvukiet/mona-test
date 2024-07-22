import Banner from "./component/banner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
      <>
        <Banner/>
        <div className="hfill">
          <div className="hfill-wrap">
            <div className="container">
              <div className="hfill-box">
                <div className="hfill-top">
                  <div className="hfill-input">
                    <label htmlFor="hfill1">
                      <input type="radio" id="hfill1" name="hfill" />
                      <span className="box-input"></span>
                      <span className="txt fw-6">One way / Round-trip</span>
                    </label>
                    <label htmlFor="hfill2">
                      <input type="radio" id="hfill2" name="hfill" />
                      <span className="box-input"></span>
                      <span className="txt fw-6">Multi-city</span>
                    </label>
                    <select className="select-custom" name="persons">
                      <option value="volvo">02 Adult, 01 children</option>
                      <option value="saab">02 Adult, 02 children</option>
                    </select>
                    <select className="select-custom" name="=business-class">
                      <option value="volvo">Business Class</option>
                      <option value="saab">Business Class</option>
                    </select>
                  </div>
                </div>
                <div className="hfill-main">
                  <div className="hfill-flex">
                    <div className="hfill-col">
                        <div className="hfill-col-box">
                          <span className="txt fw-6 c-grey">From</span>
                          <span className="c-pri fw-7 t24">Da Nang</span>
                          <span className="fw-6 c-black">Quang Nam, Viet Nam</span>
                        </div>
                        <span className="icon-compare">
                          <img src="sosanh.svg" alt="" />
                        </span>
                    </div>
                    <div className="hfill-col">
                      <div className="hfill-col-box">
                      <span className="txt fw-6 c-grey">TO</span>
                      <span className="c-pri fw-7 t24">Ho Chi Minh</span>
                      <span className="fw-6 c-black">Viet Nam</span>
                      </div>
                    </div>
                    <div className="hfill-col">
                      <div className="hfill-col-box">
                        <div className="hfill-box-inner">
                          <span className="txt fw-6 c-grey">DEPARTURE</span>
                          <span className="c-pri fw-7 t24">Fri, 22 Mar, 2022
                              <span className="icon">
                                <img src="calender.svg" alt="" />
                              </span>
                          </span>
                          <div className="hfill-box-link">
                            <a href="" className="link">Prev</a>
                            <a href="" className="link">Next</a>
                          </div>
                        </div>
                        <div className="hfill-box-inner">
                          <span className="txt fw-6 c-grey">RETURN</span>
                          <span className="c-pri fw-7 t24">Fri, 22 Mar, 2022
                              <span className="icon">
                                <img src="calender.svg" alt="" />
                              </span>
                          </span>
                          <div className="hfill-box-link">
                            <a href="" className="link">Prev</a>
                            <a href="" className="link">Next</a>
                          </div>
                        </div>
               
                      </div>
                    </div>
                  </div>
                  <div className="hfill-btn">
                    <button className="btn btn-pri">
                      <span className="text">
                        Search Flights
                      </span>
                      <span className="icon">
                        <FontAwesomeIcon icon={faArrowRightLong} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
