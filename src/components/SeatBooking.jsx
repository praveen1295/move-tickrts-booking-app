import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEATS from "../constents/SeatOption";
import movieContext from "../features/contexts/movieContext";
import SingleSeat from "./SingleSeat";
import "../App.css";

const SeatBooking = () => {
  const navigate = useNavigate();
  const { showDetail, setShowDetail } = useContext(movieContext);
  // eslint-disable-next-line
  const [seat, setSeat] = useState({ ...SEATS.SEAT_STRUCTURE });
  const [seatDetail, setSeatDetail] = useState([]);
  const [price, setPrice] = useState(0);
  const seatData = () => {
    let arr = [];
    // eslint-disable-next-line
    let data = Object.values(seat).map((items, idx) => {
      arr.push(items);
      return items.seat;
    });
    setSeatDetail(arr);
  };

  const updatePrice = () => {
    setShowDetail({
      ...showDetail,
      totalAmount: price,
    });
    navigate("/summary");
  };

  const handleSeatClick = (e, flag, setFlag) => {
    // e.stopPropagation();
    let seat = e.target.innerHTML;
    let char = e.target.innerHTML.charAt(0);

    let newArr = showDetail.seatNo;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].includes(seat)) {
        newArr.splice(i, 1);
        setShowDetail({ ...showDetail, seatNo: newArr });
        setFlag({ ...flag, select: false });

        if (char === "A") {
          setPrice((prev) => prev - SEATS.SEAT_PRICE.PLATINUM);
        } else if (
          char === "B" ||
          char === "C" ||
          char === "D" ||
          char === "E" ||
          char === "F"
        ) {
          setPrice((prev) => prev - SEATS.SEAT_PRICE.GOLD);
        } else if (
          char === "G" ||
          char === "H" ||
          char === "I" ||
          char === "J" ||
          char === "K"
        ) {
          setPrice((prev) => prev - SEATS.SEAT_PRICE.SILVER);
        } else {
          setPrice((prev) => prev - SEATS.SEAT_PRICE.CLUB);
        }

        return;
      }
    }

    if (showDetail.seatNo.length >= showDetail.totalSelectedSeat) {
      alert(`can not choose more then ${showDetail.totalSelectedSeat} seat`);
      return;
    }
    setFlag({ ...flag, select: true });

    let seatType = "";

    if (char === "A") {
      seatType = "PLATINUM";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.PLATINUM);
    } else if (
      char === "B" ||
      char === "C" ||
      char === "D" ||
      char === "E" ||
      char === "F"
    ) {
      seatType = "GOLD";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.GOLD);
    } else if (
      char === "G" ||
      char === "H" ||
      char === "I" ||
      char === "J" ||
      char === "K"
    ) {
      seatType = "SILVER";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.SILVER);
    } else {
      seatType = "CLUB";
      setPrice((prev) => prev + SEATS.SEAT_PRICE.CLUB);
    }
    setShowDetail({
      ...showDetail,
      // totalAmount: price,
      seatNo: [...showDetail.seatNo, seat],
      seatType: seatType,
    });
  };

  useEffect(() => {
    seatData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container p-4">
      <button
        className="btn border border-info p-1 m-1 text-primary"
        style={{
          width: "2rem",
          fontSize: "10px",
        }}
        onClick={(e) => handleSeatClick(e)}
        disabled="true"
      >
        A-1
      </button>

      <small className="p-1">Available</small>
      <button
        className="btn border border-info p-1 m-1 bg-danger "
        style={{
          width: "2rem",
          fontSize: "10px",
        }}
        onClick={(e) => handleSeatClick(e)}
        disabled="true"
      >
        A-1
      </button>
      <small className="p-1">Not Available</small>

      <button
        className="btn border border-info p-1 m-1 bg-primary text-light"
        style={{
          width: "2rem",
          fontSize: "10px",
        }}
        onClick={(e) => handleSeatClick(e)}
        disabled="true"
      >
        A-1
      </button>
      <small className="p-1">Selected</small>
      <br />
      <br />

      {seatDetail.map((item, idx) => {
        return (
          <div key={idx} className="">
            {idx === 0 && (
              <>
                <h6>PLATINUM- Rs. 250</h6>
                <hr />
              </>
            )}
            {idx === 1 && (
              <>
                <h6>GOLD- Rs. 200</h6>
                <hr />
              </>
            )}
            {idx === 2 && (
              <>
                <h6>SILVER- Rs. 170</h6>
                <hr />
              </>
            )}
            {idx === 3 && (
              <>
                <h6>CLUB- Rs. 150</h6>
                <hr />
              </>
            )}

            {item.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className="d-flex align-item-center justify-content-center"
                >
                  <div className="" style={{ width: "2rem" }}>
                    {data.row}
                  </div>
                  <div className="d-flex gap-5">
                    <div div className="d-flex">
                      {data.seats.map((seat, index) => {
                        return (
                          <div key={index}>
                            {index < 7 && (
                              <SingleSeat
                                seat={seat}
                                index={index}
                                data={data}
                                handleSeatClick={handleSeatClick}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="d-flex">
                      {data.seats.map((seat, index) => {
                        return (
                          <div key={index}>
                            {index >= 7 && (
                              <SingleSeat
                                seat={seat}
                                index={index}
                                data={data}
                                handleSeatClick={handleSeatClick}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <div
        className="d-flex flex-column align-items-center my-4"
        style={{ width: "100%" }}
      >
        <div className="w-50 shadow p-3 mb-5 bg-body rounded"></div>
        <button className="btn btn-info" onClick={updatePrice}>
          Pay Rs. - {price}
        </button>
      </div>
    </div>
  );
};

export default SeatBooking;
