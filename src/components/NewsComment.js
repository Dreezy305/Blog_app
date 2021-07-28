import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function NewsComment() {
  return (
    <>
      <div className="form-floating w-100">
        <textarea
          className="form-control"
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
