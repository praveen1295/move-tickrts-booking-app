import React, { useEffect, useState, useContext } from "react";
import movieContext from "../features/contexts/movieContext";

const SingleSeat = ({ seat, data, index, handleSeatClick }) => {
  const { showDetail } = useContext(movieContext);

  const [flag, setFlag] = useState({ disable: false, select: false });

  const seatNotAvailable = (data) => {
    for (let index = 0; index < showDetail.bookedSeat.length; index++) {
      if (showDetail.bookedSeat[index] === data) {
        setFlag({ ...flag, disable: true });
        break;
      }
    }
  };

  useEffect(() => {
    seatNotAvailable(`${data.row}-${seat}`);
    // eslint-disable-next-line
  }, []);

  return (
    <button
      key={index}
      className={`btn border border-info p-1 m-1 ${
        flag.disable ? "bg-danger" : "text-primary"
      } ${!flag.disable && flag.select ? "bg-primary text-light" : ""}`}
      style={{
        width: "2rem",
        fontSize: "10px",
      }}
      onClick={(e) => handleSeatClick(e, flag, setFlag)}
      disabled={flag.disable}
    >
      {data.row}-{seat}
    </button>
  );
};

export default SingleSeat;
