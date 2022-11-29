import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import movieContext from "../features/contexts/movieContext";
import SEAT from "../constents/SeatOption";

const Cart = ({ time, theaterName, movieName }) => {
  const navigate = useNavigate();
  const { showDetail, setShowDetail } = useContext(movieContext);
  const [noOfSeat, setNoOfSeat] = useState(false);
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const numberOfSeat = (e) => {
    setNoOfSeat(true);
    setShowDetail({
      ...showDetail,
      totalSelectedSeat: e.target.innerHTML,
      showTime: time,
    });
  };
  const handleShowTime = () => {
    setShowDetail({
      ...showDetail,
      theaterName: { theaterName },
      // movieName: movieName,
    });
  };
  const selectSeat = () => {
    if (!noOfSeat) {
      alert("Please select number of seats...");
      return;
    }
    navigate("/seatBooking");
    setNoOfSeat(false);
  };
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleShowTime}
      >
        {time}
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                How Many Seats?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-around">
                {seats.map((seat, idx) => {
                  return (
                    <div key={idx}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="options-outlined"
                        id={idx}
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-success"
                        htmlFor={idx}
                        onClick={(e) => numberOfSeat(e)}
                      >
                        {seat}
                      </label>
                    </div>
                  );
                })}
              </div>
              <br />
              <br />
              <div className="d-flex justify-content-around">
                {SEAT.SEAT_TYPE.map((seat, idx) => {
                  return (
                    <div
                      key={idx}
                      className="text-center d-flex flex-column align-items-center"
                    >
                      <div className="text-secondary small">{seat.type}</div>
                      <div className="text-dark">Rs. {seat.price}</div>
                      {showDetail.totalSelectedSeat <=
                      showDetail.selectedSeat[seat.type].available ? (
                        <small
                          className="text-info"
                          style={{ fontSize: "12px" }}
                        >
                          Available
                        </small>
                      ) : (
                        <small
                          className="text-danger"
                          style={{ fontSize: "12px" }}
                        >
                          Not Available
                        </small>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={selectSeat}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                SELECT SEAT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
