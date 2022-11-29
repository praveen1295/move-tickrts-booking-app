import React, { useContext } from "react";
import "../../App.css";
import noImage from "./noImage.jfif";
import DescriptionAllShow from "./DescriptionAllShow";
import { useNavigate } from "react-router-dom";
import movieContext from "../../features/contexts/movieContext";
import userContext from "../../features/contexts/userContext";

function AllShow(props) {
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
            <img src={item.image ? item.image.medium : noImage} alt="" />
            <div className="card-body" style={{ margin: "20px 0 0 0" }}>
              <h5 className="card-title">{item.name !== null && item.name} </h5>
              <p className="card-text">
                IMDB rating:{" "}
                {item.rating.value !== null ? item.rating.average : ""} &#11088;
                <br />
                <small className="text-muted">
                  Language: {item.language && item.language}
                  <br />
                  Type: {item.type ? item.type : "unknown"}
                </small>
              </p>
              <div
                className="d-flex"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                <DescriptionAllShow show={item} />
                <span
                  className="readMore"
                  onClick={() => handleBookShow(item.name)}
                >
                  Book Show
                  {/* <span>Book Show</span> */}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default React.memo(AllShow);
