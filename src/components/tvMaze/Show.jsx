import React, { useContext } from "react";
import Description from "./Description";
import noImage from "./noImage.jfif";
import movieContext from "../../features/contexts/movieContext";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import userContext from "../../features/contexts/userContext";

function Show(props) {
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
              src={item.show.image ? item.show.image.medium : noImage}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.show.name !== null && item.show.name}{" "}
              </h5>
              <p className="card-text">
                <strong>
                  IMDB rating:{" "}
                  {item.show.rating.value !== null
                    ? item.show.rating.average
                    : "NA"}{" "}
                  &#11088;
                </strong>
                <br />
                <small className="text-muted">
                  Language: {item.show.language && item.show.language}
                  <br />
                  genres: {item.show.genres ? item.show.genres[0] : "unknown"}
                </small>
              </p>
              <div
                className="d-flex"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                <Description show={item.show} />
                <span
                  className="readMore"
                  onClick={() => handleBookShow(item.show.name)}
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

export default React.memo(Show);
