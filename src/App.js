import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar.components.jsx";
import News from "./components/News/News.components.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style.css";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route
              excat
              path="/business"
              element={<News key="business" category="business" />}
            ></Route>
            <Route
              excat
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  apiKey={this.apiKey}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              excat
              path="/environment"
              element={
                <News
                  key="environment"
                  apiKey={this.apiKey}
                  category="environment"
                />
              }
            ></Route>
            <Route
              excat
              path="/food"
              element={<News key="food" apiKey={this.apiKey} category="food" />}
            ></Route>
            <Route
              excat
              path="/health"
              element={
                <News key="health" apiKey={this.apiKey} category="health" />
              }
            ></Route>
            <Route
              excat
              path="/politics"
              element={
                <News key="politics" apiKey={this.apiKey} category="politics" />
              }
            ></Route>
            <Route
              excat
              path="/science"
              element={
                <News key="science" apiKey={this.apiKey} category="science" />
              }
            ></Route>
            <Route
              excat
              path="/sports"
              element={
                <News key="sports" apiKey={this.apiKey} category="sports" />
              }
            ></Route>
            <Route
              excat
              path="/technology"
              element={
                <News
                  key="technology"
                  apiKey={this.apiKey}
                  category="technology"
                />
              }
            ></Route>
            <Route
              excat
              path="/top"
              element={<News key="top" apiKey={this.apiKey} category="top" />}
            ></Route>
            <Route
              excat
              path="/"
              element={
                <News key="world" apiKey={this.apiKey} category="world" />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
