"use client";
import { useState } from "react";

export default function Item() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="it">
      <div className="it-box">
        <div className="it-top">
          <div className="plist-right-item left">
            <span className="icon-logo">
              <img src="icon-logo.png" alt="" />
            </span>
            <div className="desc">
              <p className="txt fw-6">Bamboo Airways</p>
            </div>
          </div>
          <div className="mid">
            <div className="plist-right-time">
              <div className="left">
                <p className="txt fw-6">21:40</p>
                <span className="tag fw-6">DAD</span>
              </div>
              <div className="mid">
                <p className="txt">1h 30m</p>
                <div className="mid-line"></div>
                <p className="txt">Direct</p>
              </div>
              <div className="right">
                <p className="txt fw-6">23:10</p>
                <span className="tag fw-6">DAD</span>
              </div>
            </div>
            <div className="mid-box">
              <div className="item">
                <span className="icon">
                  <img src="icon1.svg" alt="" />
                </span>
                <p className="txt">
                  Baggage
                  <span className="fw-6 c-pri"> 20kg</span>
                </p>
              </div>
              <div className="item">
                <span className="icon">
                  <img src="icon2.svg" alt="" />
                </span>
                <p className="txt">
                  In-flight
                  <span className="fw-6 c-pri"> Meal</span>
                </p>
              </div>
            </div>
            <div className="mid-box mid-box-last">
              <p className="txt ">1,326,000 vnd</p>
              <p className="c-red fw-6">1,322,000 vnd</p>
            </div>
          </div>
          <div className="right">
            <button className="btn btn-sec">
              <span className="text">Choose</span>
            </button>
          </div>
        </div>
        <div className="it-main">
          <div className="it-tab">
            <div className="it-tab-top">
              <button
                className={`link t-up ${activeTab === 0 ? "active" : ""}`}
                onClick={() => setActiveTab(0)}
              >
                Flight detail
              </button>
              <button
                className={`link t-up ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                fare info
              </button>
            </div>
            <div className="it-tab-main">
              {activeTab === 0 && (
                <div className="it-tab-ctn">
                  <div className="it-flex">
                    <div className="col">
                      <div className="col-left">
                        <div className="col-left-line"></div>
                        <div className="desc">
                          <p className="txt fw-6">21:40</p>
                          <p className="txt">11 Feb</p>
                        </div>
                        <div className="desc">
                          <p className="txt">1h 30m</p>
                        </div>
                        <div className="desc">
                          <p className="txt fw-6">21:40</p>
                          <p className="txt">11 Feb</p>
                        </div>
                      </div>
                      <div className="col-right">
                        <div className="desc">
                          <p className="txt fw-6">Da nang (DAD)</p>
                          <p className="txt">Da Nang Airport</p>
                        </div>
                        <div className="desc">
                          <p className="txt fw-6">Ho Chi Minh City (SGN)</p>
                          <p className="txt">Tansonnhat Intl</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                        <div className="plist-right-item">
                            <span className="icon-logo">
                            <img src="icon-logo.png" alt="" />
                            </span>
                            <div className="desc">
                                <p className="txt fw-6">Bamboo Airways</p>
                                <p className="txt">QH-183 - Economy</p>
                            </div>
                        </div>
                        <div className="it-tab-box">
                            <div className="col">
                                <p className="txt">Baggage
                                    <span className="c-pri fw-6">20kg</span>   
                                </p>
                            </div>
                            <div className="col">
                                <p className="txt">Aircraft 
                                    <span className="c-pri fw-6">Airbus A321</span>   
                                </p>
                            </div>
                            <div className="col">
                                <p className="txt">In-flight  
                                    <span className="c-pri fw-6">Meal</span>   
                                </p>
                            </div>
                            <div className="col">
                                <p className="txt">Seat layout
                                    <span className="c-pri fw-6"> 3-3</span>   
                                </p>
                            </div>
                            <div className="col">
                                <p className="txt">In-flight  
                                    <span className="c-pri fw-6">Entertainment</span>   
                                </p>
                            </div>
                            <div className="col">
                                <p className="txt">Seat pitch 
                                    <span className="c-pri fw-6">29 inches (standard)</span>   
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && 
                <div className="it-tab-ctn">
                    <div className="it-flex it-flex-two">
                        <div className="col">
                            <div className="plist-right-item">
                                <span className="icon-logo">
                                <img src="icon-logo.png" alt="" />
                                </span>
                                <div className="desc">
                                    <p className="txt fw-6">Bamboo Airways</p>
                                    <p className="txt">QH-183 - Economy</p>
                                </div>
                            </div>
                            <div className="plist-right-time">
                                <div className="left">
                                    <p className="txt fw-6">Da Nang</p>
                                    <span className="c-pri">Economy</span>
                                </div>
                                <div className="mid">
                                    <div className="mid-line"></div>
                                </div>
                                <div className="right">
                                    <p className="txt fw-6">Ho Chi Minh City</p>
                                </div>
                            </div>
                            <p className="sub-txt">Non - Refundable</p>
                        </div>
                        <div className="col">
                            <p className="txt fw-6 t-up">price details</p>
                            <div className="it-total">
                                <div className="item">
                                    <span className="txt">Adult Basic Fare (x1)</span>
                                    <span className="txt fw-6">1,326,000 vnd</span>
                                </div>
                                <div className="item">
                                    <span className="txt">Tax</span>
                                    <span className="txt fw-6">included</span>
                                </div>
                                <div className="item">
                                    <span className="txt">Regular Total Price</span>
                                    <span className="txt fw-6">1,326,000 vnd</span>
                                </div>
                                <div className="item">
                                    <span className="txt c-red">Save</span>
                                    <span className="txt fw-6">-4,000 vnd</span>
                                </div>
                                <div className="item">
                                    <span className="txt c-red">You pay</span>
                                    <span className="txt fw-6">1,322,000 vnd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
