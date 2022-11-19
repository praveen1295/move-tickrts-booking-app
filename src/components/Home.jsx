import React from "react";
import Cart from "./Cart";

const cinemaHall = [
  { name: "INOX, Sapna sangita Mall" },
  { name: "Rigal ceneplex" },
  { name: "PVR Cenema" },
  { name: "Ashima Ceneplex" },
  { name: "Sangam Ceneplex" },
];

const handleTime = () => {};

const Home = () => {
  return (
    <div className="container py-4">
      <ul class="list-group">
        {cinemaHall.map((item, idx) => {
          return (
            <li
              key={idx}
              class="list-group-item d-flex align-item-center justify-content-between bg-info my-2"
            >
              <span>{item.name}</span>
              <div className="d-flex gap-3">
                <Cart time=" 09:00-12:00" />
                <Cart time=" 12:00-03:00" />
                <Cart time=" 03:00-06:00" />
                {/* <button
                  className="btn btn-primary"
                  onClick={(e) => handleTime(e)}
                >
                  09:00-12:00
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleTime(e)}
                >
                  12:00-03:00
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleTime(e)}
                >
                  03:00-06:00
                </button> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
