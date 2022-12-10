import React, { useState, useEffect, useReducer, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import movieReducer from "./features/reducers/reducer";
import movieContext from "./features/contexts/movieContext";
import Time from "./components/Time";
import TvMaze from "./components/tvMaze/TV_Maze";
import BookingSummary from "./components/BookingSummary";
import Thankyou from "./components/Thankyou";
import userContext from "./features/contexts/userContext";
import userReducer from "./features/reducers/reducer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import SeatBooking from "./components/SeatBooking";
import "./App.css";

function App() {
  //login--------------------------
  const initialState = useContext(userContext);
  const [state, dispatch] = useReducer(userReducer, initialState);

  const [flag, setFlag] = useState({ login: false, cart: false });
  const [dataList, setDataList] = useState({ data: [], filterData: [] });
  const [currentUser, setCurrentUser] = useState({});
  // eslint-disable-next-line
  const [alert, setAlert] = useState(null);
  //------------------------------------------------------------------------------------------------------

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch("API/movies.json");
    const data = await response.json();
    setLoading(false);
    setMovieData(data);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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
    <div className="App">
      <userContext.Provider
        value={{
          state,
          dispatch,
          flag,
          setFlag,
          dataList,
          setDataList,
          currentUser,
          setCurrentUser,
          showAlert,
        }}
      >
        <movieContext.Provider
          value={{
            state,
            dispatch,
            movieData,
            setMovieData,
            showDetail,
            loading,
            setShowDetail,
          }}
        >
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<TvMaze />} />
              <Route path="/selectTime" element={<Time />} />
              <Route path="/seatBooking" element={<SeatBooking />} />
              <Route path="/summary" element={<BookingSummary />} />
              <Route path="/thankyou" element={<Thankyou />} />
            </Routes>
          </Router>
        </movieContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
