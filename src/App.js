import React, { useState, useEffect, useReducer, useContext } from "react";
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
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch("API/movies.json");
    const data = await response.json();
    setLoading(false);
    setMovieData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [showDetail, setShowDetail] = useState({
    movieName: "",
    totalSeat: 280,
    selectedSeat: {
      PLATINUM: { total: 20, booked: 19, available: 1 },
      GOLD: { total: 80, booked: 88, available: 2 },
      SILVER: { total: 80, booked: 30, available: 100 },
      CLUB: { total: 80, booked: 20, available: 110 },
    },
    totalSelectedSeat: 0,
    theaterName: "",
    totalAmount: 0,
    showTime: "",
    seatType: "",
    seatNo: [],
    convenienceFee: 30,
    bookedSeat: ["A-10", "A-11", "A-12", "K-4", "K-2", "K-3"],
  });
  return (
    <div>
      <movieContext.Provider
        value={{
          state,
          dispatch,
          movieData,
          showDetail,
          loading,
          setShowDetail,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seatBooking" element={<SeatBooking />} />
            <Route path="/summary" element={<BookingSummary />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </Router>
      </movieContext.Provider>
    </div>
  );
}

export default App;
