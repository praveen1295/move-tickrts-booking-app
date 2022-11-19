import React, { createContext, useState, useReducer, useContext } from "react";
import movieReducer from "./features/reducer";
import movieContext from "./features/movieContext";
import Home from "./components/Home";
import BookingSummary from "./components/BookingSummary";
import Thankyou from "./components/Thankyou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SeatBooking from "./components/SeatBooking";

function App() {
  const initialState = useContext(movieContext);
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const [showDetail, setShowDetail] = useState({
    movieName: "movie Name",
    totalSelectedSeat: 0,
    theaterName: "",
    totalAmount: 0,
    showTime: "",
    seatType: "",
    seatNo: [],
    convenienceFee: 30,
  });
  return (
    <>
      <movieContext.Provider
        value={{ state, dispatch, showDetail, setShowDetail }}
      >
        {console.log(showDetail)}

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seatBooking" element={<SeatBooking />} />
            <Route path="/summary" element={<BookingSummary />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </Router>
      </movieContext.Provider>
    </>
  );
}

export default App;
