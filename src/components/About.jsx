import React from "react";

export default function About(props) {
  let myStyle = {
    color: "white",
    backgroundColor: "#042743",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Who We Are </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              blanditiis debitis dolores explicabo distinctio minus, voluptate
              enim laudantium saepe pariatur accusamus deleniti quae ipsum
              numquam, placeat dolorem voluptatibus expedita dolorum?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              totam. Ducimus, temporibus. Delectus beatae quia omnis
              perspiciatis libero. Id quas sequi blanditiis suscipit error rerum
              voluptatum explicabo illum nam, alias doloremque quis harum? Dolor
              ea porro, non eaque delectus sapiente rerum ab pariatur nihil?
              Temporibus modi vitae repellat, facere molestiae qui.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              doloremque voluptatem veniam velit error qui. Ullam velit sit,
              ipsum quaerat impedit minima laboriosam deleniti soluta aperiam
              unde fugit sapiente sint nihil dolorem quos animi. Quo, eos animi!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
