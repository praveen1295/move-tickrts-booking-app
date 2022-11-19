import React, { createContext, useState, useReducer, useContext } from "react";
import movieReducer from "./features/reducer";
import movieContext from "./features/movieContext";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SeatBooking from "./components/SeatBooking";

function App() {
  const initialState = useContext(movieContext);
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const [movieDetail, setMovieDetail] = useState({
    totalSelectedSeat: 0,
    theaterName: "",
    totalAmount: 0,
  });
  return (
    <movieContext.Provider
      value={{ state, dispatch, movieDetail, setMovieDetail }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seatBooking" element={<SeatBooking />} />
        </Routes>
      </Router>
    </movieContext.Provider>
  );
}

export default App;
