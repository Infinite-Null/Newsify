import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";

export default class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categary}&apiKey=3ffe9723e2e04bc8ab3071478738124a&pagesize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }
  NextNews = async () => {
    this.setState({
      page: ++this.state.page,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categary}&apiKey=3ffe9723e2e04bc8ab3071478738124a&page=${this.state.page}&pagesize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  };
  PreviousNews = async () => {
    this.setState({
      page: --this.state.page,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categary}&apiKey=3ffe9723e2e04bc8ab3071478738124a&page=${this.state.page}&pagesize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ loading: false });
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  };
  render() {
    return (
      <div>
        <h1
          className="card-title my-5"
          style={{
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          {this.props.title}
        </h1>
        {this.state.loading && <Loading />}
        <div>
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.articles?.map((ele) => {
              return (
                <NewsItem
                  title={ele.title ? ele.title : ""}
                  discription={ele.description ? ele.description : ""}
                  src={ele.urlToImage ? ele.urlToImage : ""}
                  moreInfo={ele.url ? ele.url : ""}
                  key={ele.url ? ele.url : ""}
                  publish={ele.publishedAt ? ele.publishedAt : ""}
                  source={ele.source.name ? ele.source.name : ""}
                />
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-outline-primary m-2 "
            onClick={this.PreviousNews}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 9)
            }
            className="btn btn-outline-primary m-2"
            onClick={this.NextNews}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}
