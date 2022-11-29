import React, { useContext } from "react";
import movieContext from "../../features/contexts/movieContext";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Description from "./Description";
import noImage from "./noImage.jfif";
import userContext from "../../features/contexts/userContext";

function Actor(props) {
  const navigate = useNavigate();
  const { showDetail, setShowDetail } = useContext(movieContext);
  const { flag } = useContext(userContext);

  const handleBookShow = (movieName) => {
    setShowDetail({ ...showDetail, movieName: movieName });
    !flag.login && alert("please login first");
    flag.login ? navigate("./selectTime") : navigate("/login");
  };
  return (
    <React.Fragment>
      {props.showItems.map((item, index) => {
        return (
          <div className="col-md-3 my-4" key={index}>
            <img
              src={
                item._embedded.show.image
                  ? item._embedded.show.image.medium
                  : noImage
              }
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">
                {item._embedded.show.name !== null && item._embedded.show.name}{" "}
              </h5>
              <p className="card-text">
                <strong>
                  IMDB rating:{" "}
                  {item._embedded.show.rating.value !== null
                    ? item._embedded.show.rating.average
                    : "NA"}{" "}
                  &#11088;
                </strong>
                <br />
                <small className="text-muted">
                  Language:{" "}
                  {item._embedded.show.language && item._embedded.show.language}
                  <br />
                  genres:{" "}
                  {item._embedded.show.genres
                    ? item._embedded.show.genres[0]
                    : "unknown"}
                </small>
              </p>
              <div
                className="d-flex"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                <Description show={item.show} />
                <span
                  className="readMore"
                  onClick={() => handleBookShow(item._embedded.show.name)}
                >
                  Book Show
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default React.memo(Actor);
