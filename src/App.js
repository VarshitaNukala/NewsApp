import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar.components.jsx";
import News from "./components/News/News.components.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style.css";

export default class App extends Component {
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
              element={<News key="entertainment" category="entertainment" />}
            ></Route>
            <Route
              excat
              path="/environment"
              element={<News key="environment" category="environment" />}
            ></Route>
            <Route
              excat
              path="/food"
              element={<News key="food" category="food" />}
            ></Route>
            <Route
              excat
              path="/health"
              element={<News key="health" category="health" />}
            ></Route>
            <Route
              excat
              path="/politics"
              element={<News key="politics" category="politics" />}
            ></Route>
            <Route
              excat
              path="/science"
              element={<News key="science" category="science" />}
            ></Route>
            <Route
              excat
              path="/sports"
              element={<News key="sports" category="sports" />}
            ></Route>
            <Route
              excat
              path="/technology"
              element={<News key="technology" category="technology" />}
            ></Route>
            <Route
              excat
              path="/top"
              element={<News key="top" category="top" />}
            ></Route>
            <Route
              path="/"
              element={<News key="world" category="world" />}
            ></Route>
            <Route
              path="/NewsApp"
              element={<News key="general" category="world" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
