"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Item from "@/app/component/item";

import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";

const allFlights = gql`
  query getFlights($currentPage: Int, $pageSize: Int) {
    Flights(currentPage: $currentPage, pageSize: $pageSize) {
      currentPage
      count
      items {
        AirlineCode
        Carryon
        ChargeAdult
        ChargeChild
        ChargeInfant
        CompareMode
        DayChange
        Duration
        EndDate
        EndPoint
        FareBasis
        FareClass
        FareRule
        FareType
        FeeAdult
        FeeChild
        FeeInfant
        FlightId
        FlightNumber
        Freebag
        GroupClass
        HasChangedClass
        HasDownStop
        MarketingAirline
        NoRefund
        OperatingAirline
        Plane
        PriceAdult
        PriceChild
        PriceInfant
        Promo
        RelatedFlights {
          AirlineCode
          Carryon
          Duration
          EndPoint
          EndTime
          FlightNumber
          Freebag
          Index
          Plane
          SeatClass
          StartPoint
          StartTime
        }
        ReturnFlight
        SeatRemain
        SessionId
        StartDate
        StartPoint
        StopOvernight
        Stops
        TaxAdult
        TaxChild
        TaxInfant
      }
      pageSize
      total
    }
  }
`;
// Initialize the GraphQL client
const client = new GraphQLClient('https://api-erp.monamedia.net/graphql');

export default function ListPage() {

  const { data, error, isLoading } = useQuery({
    queryKey: ['flights'],
    queryFn: async () => client.request(allFlights, { currentPage: 1, pageSize: 10 }),
  });
  console.log("data: ",data);
  

  return (
    <div className="plist">
      <div className="plist-wrap">
        <div className="plist-top">
          <div className="container">
            <div className="plist-top-inner">
              <div className="plist-top-left">
                <div className="box">
                  <p className="txt fw-6 c-pri">Da Nang (DAD)</p>
                  <p className="txt t14">Fri, 22 Mar, 2022</p>
                </div>
                <span className="icon">
                  <img src="sosanh.svg" alt="" />
                </span>
                <div className="box">
                  <p className="txt fw-6 c-pri">Ho Chi Minh (SGN)</p>
                  <p className="txt t14">Fri, 22 Mar, 2022</p>
                </div>
              </div>
              <div className="plist-top-mid">
                <p className="txt fw-7 c-black">Round-trip</p>
                <p className="txt fw-7 c-black">
                  <span className="c-pri">02 </span>
                  Adult,
                  <span className="c-pri"> 01 </span> children
                </p>
                <p className="txt fw-7 c-black">Business Class</p>
              </div>
              <div className="plist-top-right">
                <button className="btn btn-red">
                  <span className="text">Change Flights</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="plist-main">
          <div className="container">
            <div className="plist-flex">
              <div className="plist-left">
                <div className="plist-fill">
                  <p className="txt c-grey fw-5">Filter</p>
                  <select className="select-custom" name="=business-class">
                    <option value="volvo">Transit</option>
                  </select>
                  <select className="select-custom" name="=business-class">
                    <option value="volvo">Time</option>
                  </select>
                  <select className="select-custom" name="=business-class">
                    <option value="volvo">Airline</option>
                  </select>
                  <select className="select-custom" name="=business-class">
                    <option value="volvo">Low Price</option>
                  </select>
                </div>
                <div className="plist-list-main">
                  <div className="plist-list">
                    <Item />
                  </div>
                </div>
              </div>
              <div className="plist-right">
                <div className="plist-right-inner">
                  <p className="title t-up fw-6">your flights</p>
                  <div className="plist-right-main">
                    <div className="plist-right-item">
                      <span className="icon">01</span>
                      <div className="desc">
                        <p className="txt">Fri, 11 Feb, 2022</p>
                        <p className="txt fw-6">Da Nang - Ho Chi Minh</p>
                      </div>
                    </div>
                    <div className="plist-right-item">
                      <span className="icon-logo">
                        <img src="icon-logo.png" alt="" />
                      </span>
                      <div className="desc">
                        <p className="txt fw-6">Bamboo Airways</p>
                        <a href="" className="link c-pri fw-6">
                          Details
                        </a>
                      </div>
                    </div>
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
                    <button className="btn btn-blue full">
                      <span className="text">Change departure flight</span>
                    </button>
                  </div>
                  <div className="plist-right-main">
                    <div className="plist-right-item">
                      <span className="icon">02</span>
                      <div className="desc">
                        <p className="txt">Fri, 11 Feb, 2022</p>
                        <p className="txt fw-6">Ho Chi Minh - Da Nang</p>
                      </div>
                    </div>
                  </div>
                  <div className="plist-total">
                    <p className="txt">Subtotal</p>
                    <p className="txt c-red fw-6">1,322,000 vnd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
