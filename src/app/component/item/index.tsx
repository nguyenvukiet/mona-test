/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function Item({fly , index, data} : any) {
  const [activeTab, setActiveTab] = useState(0);

  const timeStart = fly?.RelatedFlights?.[0]?.StartTime;
  const timeEnd = fly?.RelatedFlights?.[0]?.EndTime;

  const duration = fly?.RelatedFlights?.[0]?.Duration; //120
  function formatDuration(minutes : any) {
    // Calculate hours and remaining minutes
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    // Return formatted string
    return `${hours}h${remainingMinutes.toString().padStart(2, '0')}m`;
  }
  const formatPrice = (price : any) => {
    const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);
    return `${formattedPrice}đ`;
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });
    return `${day} ${month}`;
};

console.log(data)
const handleChooseFly = (index) => {
  // Find the item with the matching index
  const selectedItem = data.find(item => item.index === index);
  if (selectedItem) {
    console.log("item select:", selectedItem);
  }
}


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
                <p className="txt fw-6">{timeStart.split('T')[1].substring(0, 5)}</p>
                <span className="tag fw-6">{fly?.RelatedFlights?.[0]?.StartPoint}</span>
              </div>
              <div className="mid">
                <p className="txt">{formatDuration(duration)}</p>
                <div className="mid-line"></div>
                <p className="txt">Direct</p>
              </div>
              <div className="right">
                <p className="txt fw-6">{timeEnd.split('T')[1].substring(0, 5)}</p>
                <span className="tag fw-6">{fly?.RelatedFlights?.[0]?.EndPoint}</span>
              </div>
            </div>
            <div className="mid-box">
              <div className="item">
                <span className="icon">
                  <img src="icon1.svg" alt="" />
                </span>
                <p className="txt">
                  Baggage 
                  <span className="fw-6 c-pri"> {fly?.Freebag}</span>
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
              <p className="c-red fw-6">{formatPrice(fly?.PriceAdult)}</p>
            </div>
          </div>
          <div className="right">
            <button className="btn btn-sec" onClick={()=>handleChooseFly(index)}>
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
                          <p className="txt fw-6">{timeStart.split('T')[1].substring(0, 5)}</p>
                          <p className="txt">{formatDate(timeStart)}</p>
                        </div>
                        <div className="desc">
                          <p className="txt">{formatDuration(duration)}</p>
                        </div>
                        <div className="desc">
                          <p className="txt fw-6">{timeEnd.split('T')[1].substring(0, 5)}</p>
                          <p className="txt">{formatDate(timeEnd)}</p>
                        </div>
                      </div>
                      <div className="col-right">
                        <div className="desc">
                          <p className="txt fw-6">{fly?.RelatedFlights?.[0]?.StartPoint}</p>
                          {/* <p className="txt">Da Nang Airport</p> */}
                        </div>
                        <div className="desc">
                          <p className="txt fw-6">{fly?.RelatedFlights?.[0]?.EndPoint}</p>
                          {/* <p className="txt">Tansonnhat Intl</p> */}
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
                                <p className="txt">{fly?.RelatedFlights?.[0]?.FlightNumber} - {fly?.RelatedFlights?.[0]?.SeatClass}</p>
                            </div>
                        </div>
                        <div className="it-tab-box">
                            <div className="col">
                                <p className="txt">Baggage 
                                    <span className="c-pri fw-6">{fly?.Freebag}</span>   
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
                                    <p className="txt">{fly?.RelatedFlights?.[0]?.FlightNumber} - {fly?.RelatedFlights?.[0]?.SeatClass}</p>
                                </div>
                            </div>
                            <div className="plist-right-time">
                                <div className="left">
                                    <p className="txt fw-6">{fly?.RelatedFlights?.[0]?.StartPoint}</p>
                                    <span className="c-pri">{fly?.RelatedFlights?.[0]?.SeatClass}</span>
                                </div>
                                <div className="mid">
                                    <div className="mid-line"></div>
                                </div>
                                <div className="right">
                                    <p className="txt fw-6">{fly?.RelatedFlights?.[0]?.EndPoint}</p>
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
