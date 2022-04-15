import React, { Component } from "react";

import NewsItem from "../NewsItem/NewsItem.components.jsx";
import { Spinner } from "../Spinner/Spinner.components.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "world",
    author: "Unknown",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  updateNews = async () => {
    let newURL = `https://newsdata.io/api/1/news?apikey=pub_6512bc5788d9c06765c080c0cf0b34bef291&language=en&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}`;
    let data = await fetch(newURL);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.results,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    // let newURL = `https://newsdata.io/api/1/news?apikey=pub_6512bc5788d9c06765c080c0cf0b34bef291&language=en&country=${this.props.country}&category=${this.props.category}&page=1`;
    // this.setState({ loading: true });
    // let data = await fetch(newURL);
    // let parsedData = await data.json();

    // this.setState({
    //   articles: parsedData.results,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  // handlePreviousClick = async () => {
  //   // if (this.state.page > 1) {
  //   //   let newUrl = `https://newsdata.io/api/1/news?apikey=pub_6512bc5788d9c06765c080c0cf0b34bef291&language=en&country=${
  //   //     this.props.country
  //   //   }&category=${this.props.category}&page=
  //   //     ${this.state.page - 1}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(newUrl);

  //   //   let parsedData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page - 1,
  //   //     articles: parsedData.results,
  //   //     loading: false,
  //   //   });
  //   //   window.scroll({
  //   //     top: 0,
  //   //     left: 0,
  //   //     behavior: "smooth",
  //   //   });
  //   // }
  //   if (this.state.page > 1) {
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();
  //   }
  // };

  // handleNextClick = async () => {
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   // } else {
  //   //   let newURL = `https://newsdata.io/api/1/news?apikey=pub_6512bc5788d9c06765c080c0cf0b34bef291&language=en&country=${
  //   //     this.props.country
  //   //   }&category=${this.props.category}&page=
  //   //     ${this.state.page + 1}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(newURL);
  //   //   let parsedData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.results,
  //   //     loading: false,
  //   //   });
  //   //   window.scroll({
  //   //     top: 0,
  //   //     left: 0,
  //   //     behavior: "smooth",
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let newURL = `https://newsdata.io/api/1/news?apikey=pub_6512bc5788d9c06765c080c0cf0b34bef291&language=en&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(newURL);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.results),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <div className="container my-3 ">
          <h1 className="text-center">
            NewsMonkey -{this.capitalizeFirstLetter(this.props.category)} Top
            Headlines
          </h1>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
              {this.state.articles?.map((element) => {
                return (
                  <div className="col-md-4" key={element.link}>
                    <NewsItem
                      title={this.capitalizeFirstLetter(element.title)}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageURL={
                        element.image_url
                          ? element.image_url
                          : "https://www.gamespot.com/a/uploads/screen_medium/1179/11799911/3964587-screenshot2022-04-14at11.03.44am.jpg"
                      }
                      newsURL={element.link}
                      date={element.pubDate}
                      author={element.creator}
                      source={element.source_id}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between ">
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={this.state.page >= this.state.totalResults}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}
