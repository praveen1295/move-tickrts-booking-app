import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import movieContext from "../features/movieContext";
import SEAT from "../constents/SeatOption";

const Cart = ({ time, theaterName }) => {
  const navigate = useNavigate();
  const { showDetail, setShowDetail } = useContext(movieContext);
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [activeSeat, setActiveSeat] = useState(false);
  const numberOfSeat = (e) => {
    // console.log(e.target.innerHTML);
    setShowDetail({
      ...showDetail,
      totalSelectedSeat: e.target.innerHTML,
      showTime: time,
    });
  };
  const handleShowTime = () => {
    setShowDetail({ ...showDetail, theaterName: { theaterName } });
  };
  const selectSeat = () => {
    navigate("/seatBooking");
  };
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleShowTime}
      >
        {time}
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                How Many Seats?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="d-flex justify-content-around">
                {seats.map((seat, idx) => {
                  return (
                    <div
                      //   className="radio cursor-pointer"
                      style={{ cursor: "pointer" }}
                      key={idx}
                      onClick={(e) => numberOfSeat(e)}
                    >
                      {seat}
                    </div>
                  );
                })}
              </div>
              <br />
              <br />
              <div className="d-flex justify-content-around">
                {SEAT.SEAT_TYPE.map((seat, idx) => {
                  return (
                    <div key={idx} className="text-center">
                      <div className="text-secondary">{seat.type}</div>
                      <div className="text-dark">Rs. {seat.price}</div>
                      <div>{"Available"}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={selectSeat}
                type="button"
                class="btn btn-primary"
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
