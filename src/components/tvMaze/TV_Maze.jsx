import React, { useState, useEffect } from "react";
import Actor from "./Actor";
import Show from "./Show";
import AllShow from "./AllShow";
import Spinner from "./Spinner";

function TV_Maze() {
  const [showList, setShowList] = useState([]);
  const [show, setShow] = useState(false);
  const [actor, setActor] = useState(false);
  const [allShow, setAllshow] = useState({ flag: true, allShowData: [] });
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getActorId = async (data) => {
    let actorId = data[0].person.id;
    const actorURL = `https://api.tvmaze.com/people/${actorId}/castcredits?embed=show`;
    try {
      const actorResponse = await fetch(actorURL);
      const actorData = await actorResponse.json();
      setShowList(actorData);
    } catch (error) {
      console.log(error);
    }
  };

  const url =
    (show && `https://api.tvmaze.com/search/shows?q=${searchValue}`) ||
    (actor && `https://api.tvmaze.com/search/people?q=${searchValue}`) ||
    (allShow.flag && "https://api.tvmaze.com/shows?page=1");

  const getData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      actor && searchValue !== "" && getActorId(data);
      !actor && setShowList(data);
      allShow.flag && setAllshow({ ...allShow, allShowData: data });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    if (show === actor) {
      alert("please select any option actor or shows");
      value = "";
      return;
    }
    setAllshow({ ...allShow, flag: false });

    setSearchValue(value);
  };

  const showSearchByRadioInput = (e) => {
    let value = e.target.value;
    if (value === "Show") {
      setActor(false);
      setShow(true);
    } else if (value === "Actor") {
      setShow(false);
      setActor(true);
    }
    setShowList([]);
  };

  const uncheckInput = (e) => {
    e.stopPropagation();
    let value = e.target.tagName;
    let radioBtn = document.querySelectorAll(".radio1");
    if (
      searchValue === "" &&
      value !== "INPUT" &&
      value !== "IMG" &&
      value !== "SPAN" &&
      value !== "DETAILS"
    ) {
      for (let i = 0; i < radioBtn.length; i++) {
        radioBtn[i].checked = false;
      }
      if (show !== actor) {
        setActor(false);
        setShow(false);
        setAllshow({ ...allShow, flag: true });
      }
    }
  };

  useEffect(() => {
    if (
      (show === actor && searchValue === "") ||
      ((show === true || actor === true) && searchValue === "")
    ) {
      setAllshow({ ...allShow, flag: true });
    }
    getData();
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <div className="container" onClick={(e) => uncheckInput(e)}>
      <br />
      <br />
      <h1 style={{ color: "orange", fontSize: "41px" }}>TV MAZE</h1>
      <h1>Search Your Favorite Shows</h1>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input radio1"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="Actor"
          onClick={showSearchByRadioInput}
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Actor
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input radio1"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Show"
          onClick={showSearchByRadioInput}
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          Show
        </label>
      </div>

      <div className="searchBox">
        {
          <p className="py-2">
            {" "}
            {(show && "Enter shows below") || (actor && "Enter person below")}
          </p>
        }
        <input
          type="search"
          placeholder="eg: Friend"
          name="searchBox"
          value={searchValue}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <p className="py-2" style={{ color: "red" }}>
        {searchValue.length !== 0 && showList.length === 0 && (
          <small>No data found</small>
        )}
      </p>

      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {actor && <Actor showItems={showList} />}
          {show && <Show showItems={showList} />}
          {allShow.flag && <AllShow showItems={allShow.allShowData} />}
        </div>
      </div>
    </div>
  );
}

export default React.memo(TV_Maze);
