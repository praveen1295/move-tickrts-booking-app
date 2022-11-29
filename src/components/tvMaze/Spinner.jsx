import React from "react";
import loading from "./loading.webp";
const Spinner = () => {
  return (
    <div className="text-center">
      <img
        className="my-3"
        style={{ color: "gray" }}
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default Spinner;
