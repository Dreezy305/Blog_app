import React from "react";
import "../App.css";
import NewsComment from "./NewsComment";

function NewsCard() {
  return (
    <>
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p className="mt-3 mb-3">Some text..</p>
            <NewsComment />
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>
              Image
            </div>
            <p>Some text..</p>
            <NewsComment />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
