import React, { Component } from "react";
import alt from "./alt.jpg";
export default class NewsItem extends Component {
  render() {
    let { title, discription, src, moreInfo } = this.props;
    return (
      <div
        className="card mb-5 m-4 "
        style={{
          maxWidth: "440px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.559)",
          background: "whitesmoke",
          border: "5px solid white",
          color: "black",
          borderRadius: "30px",
        }}
      >
        <span
          className="position-absolute top-0 start-50 translate-middle badge pill bg-primary"
          style={{ zIndex: "10" }}
        >
          {this.props.source}
        </span>
        <div className="row g-0">
          <div
            className="border border-danger img"
            style={{
              height: "200px",
              objectFit: "fill",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.559)",
              transform: "scale(0.9)translate(-10px,0px)",
              zIndex: "1",
            }}
          >
            <img
              src={src ? src : alt}
              className="img-fluid rounded-start "
              alt="..."
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discription}</p>
              <div className="card-footer">
                <small className="text-muted">
                  Published On: {this.props.publish.slice(0, 10)} At:{" "}
                  {this.props.publish.slice(11, 16)}{" "}
                </small>
                <a
                  href={moreInfo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary position-absolute top-100 start-50 translate-middle badge pill"
                  style={{
                    padding: "15px",
                    width: "50%",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.559)",
                  }}
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
