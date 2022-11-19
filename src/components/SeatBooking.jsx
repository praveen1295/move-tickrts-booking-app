import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEATS from "../constents/SeatOption";
import movieContext from "../features/movieContext";

const SeatBooking = () => {
  const { showDetail, setShowDetail } = useContext(movieContext);
  const [seat, setSeat] = useState({ ...SEATS.SEAT_STRUCTURE });
  const [seatDetail, setSeatDetail] = useState([]);
  const [price, setPrice] = useState(0);
  const seatData = () => {
    let arr = [];
    let data = Object.values(seat).map((items, idx) => {
      arr.push(items);
      return items.seat;
    });
    setSeatDetail(arr);
  };

  const handleSeatClick = (e) => {
    // e.stopPropagation();

    if (showDetail.seatNo.length >= showDetail.totalSelectedSeat) {
      alert(`can not choose more then ${showDetail.totalSelectedSeat} seat`);
      return;
    }
    let seat = e.target.innerHTML;
    let char = e.target.innerHTML.charAt(0);
    let seatType = "";

    if (char === "A") {
      seatType = "PLATINUM";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.PLATINUM);
    } else if (char === "B" || "C" || "D" || "E" || "F") {
      seatType = "GOLD";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.GOLD);
    } else if (char === "G" || "H" || "I" || "J" || "K") {
      seatType = "SILVER";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.SILVER);
    } else {
      seatType = "CLUB";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.CLUB);
    }
    setShowDetail({
      ...showDetail,
      totalAmount: price,
      seatNo: [...showDetail.seatNo, seat],
      seatType: seatType,
    });
  };

  useEffect(() => {
    seatData();
  }, []);

  return (
    <div className="container p-4">
      {seatDetail.map((item, idx) => {
        return item.map((data, idx) => {
          return (
            <div
              key={idx}
              className="d-flex align-item-center justify-content-center"
            >
              <div className="" style={{ width: "3rem" }}>
                {data.row}
              </div>
              {data.seats.map((seat, idx) => {
                return (
                  <button
                    key={idx}
                    className="btn border border-dark p-2 m-2"
                    style={{ width: "2rem", fontSize: "10px" }}
                    onClick={(e) => handleSeatClick(e)}
                  >
                    {data.row}-{seat}{" "}
                  </button>
                );
              })}
            </div>
          );
        });
      })}
      <div
        className="d-flex justify-content-center my-4"
        style={{ width: "100%" }}
      >
        {" "}
        <Link className="btn btn-info" to={"/summary"}>
          Pay Rs. - {price}
        </Link>
      </div>
    </div>
  );
};

export default SeatBooking;
