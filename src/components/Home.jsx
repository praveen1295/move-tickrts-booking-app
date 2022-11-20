import React, { useContext } from "react";
import Cart from "./Cart";
import movieContext from "../features/movieContext";

const Home = () => {
  const { movieData, loading } = useContext(movieContext);

  return (
    <div className="container py-4">
      <h1>Book Your Favorite Shows</h1>
      {movieData.map((item, idx) => {
        return (
          <div key={idx}>
            {loading ? (
              "Loading..."
            ) : (
              <>
                <h3>Movie Name: {item.movieName}</h3>
                <ul className="list-group">
                  {item.theaterName.map((theater, idx) => {
                    return (
                      <li
                        key={idx}
                        className="list-group-item d-flex align-item-center justify-content-between bg-info my-2"
                      >
                        <span>{theater}</span>
                        <div className="d-flex gap-3">
                          <Cart
                            time=" 09:00-12:00"
                            theaterName={item.name}
                            movieName={item.movieName}
                          />
                          <Cart
                            time=" 12:00-03:00"
                            theaterName={item.name}
                            movieName={item.movieName}
                          />
                          <Cart
                            time=" 03:00-06:00"
                            theaterName={item.name}
                            movieName={item.movieName}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
