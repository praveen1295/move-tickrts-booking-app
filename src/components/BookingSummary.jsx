import React, { useContext } from "react";
import { Link } from "react-router-dom";
import movieContext from "../features/movieContext";

const BookingSummary = () => {
  const { showDetail } = useContext(movieContext);
  return (
    <div>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="w-50 p-3" style={{ backgroundColor: "#f7f2f2" }}>
          <div>
            <h2 className="text-success my-2">Booking Summary</h2>
            <h5 className="">{showDetail.movieName}</h5>

            <h6>{showDetail.theaterName.theaterName}</h6>
            <small className="text-danger">{showDetail.showTime}</small>
            <br />
            <div style={{ backgroundColor: "white" }}>
              <div className="d-flex justify-content-between">
                <span>
                  {showDetail.seatType}:{" "}
                  {showDetail.seatNo.map((seat, idx) => {
                    return (
                      <span span key={idx}>
                        {seat},
                      </span>
                    );
                  })}
                </span>
                <span>{showDetail.totalAmount}.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Convenience Fees</span>
                <span>{showDetail.convenienceFee}</span>
              </div>
              <div
                className="d-flex justify-content-between p-2"
                style={{ backgroundColor: "#fbe2b3" }}
              >
                <span>Total</span>
                <span>
                  {showDetail.totalAmount + showDetail.convenienceFee}
                </span>
              </div>
            </div>
            <br />
            <Link
              className="btn btn-info my-2"
              style={{ width: "100%" }}
              to="/thankyou"
            >
              PROCEED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
