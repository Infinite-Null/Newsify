import "./App.css";
import React, { Component } from "react";
import Nav from "./Components/Nav";
import Heading from "./Components/Heading";
import NewsComponent from "./Components/NewsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Heading />

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              exact
              path="/Newsify"
              element={
                <NewsComponent
                  key="general"
                  country="in"
                  categary="general"
                  title="Top Headline: India"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <NewsComponent
                  key="business"
                  country="in"
                  categary="business"
                  title="Business News: India"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <NewsComponent
                  key="sports"
                  country="in"
                  categary="sports"
                  title="Sports News: India"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <NewsComponent
                  key="entertaiment"
                  country="in"
                  categary="entertainment"
                  title="Entertainment News: India"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <NewsComponent
                  key="health"
                  country="in"
                  categary="health"
                  title="Health News: India"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <NewsComponent
                  key="science"
                  country="in"
                  categary="science"
                  title="Science News: India"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <NewsComponent
                  key="sports"
                  country="in"
                  categary="sports"
                  title="Sports News: India"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <NewsComponent
                  key="technology"
                  country="in"
                  categary="technology"
                  title="Technology News: India"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
