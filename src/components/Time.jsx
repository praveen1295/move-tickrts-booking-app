import React, { useContext } from "react";
import Cart from "./Cart";
import movieContext from "../features/contexts/movieContext";

const Home = () => {
  const { movieData, loading, showDetail } = useContext(movieContext);

  return (
    <div className="container py-4" style={{ marginTop: "5%" }}>
      <h1>Book Your Favorite Shows</h1>
      <h3>Movie Name: {showDetail.movieName}</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        movieData.map((item, idx) => {
          return (
            <div key={idx}>
              <ul className="list-group">
                <li
                  key={idx}
                  className="list-group-item d-flex align-item-center justify-content-between bg-info my-2"
                >
                  <span>{item.theaterName}</span>

                  <div className="d-flex gap-3">
                    {item.times.map((time, idx) => {
                      return (
                        <Cart
                          time={time}
                          theaterName={item.name}
                          movieName={item.movieName}
                        />
                      );
                    })}
                  </div>
                </li>
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
