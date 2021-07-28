import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function NewsComment() {
  return (
    <>
      <div className="form-floating w-50">
        <textarea
          className="form-control mb-3"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button">
            Post Comment
          </button>
          <button className="btn btn-primary" type="button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsComment;
