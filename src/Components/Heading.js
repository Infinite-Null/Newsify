import React, { Component } from "react";

export default class Heading extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="display-1">Newsify</h1>
        </div>
        <hr className="border border-radius-5 border-primary border-1 opacity-75 m-1"></hr>
        <div className="d-flex justify-content-center ">
          <p className="h5 ">News in your tips</p>
        </div>
      </div>
    );
  }
}
