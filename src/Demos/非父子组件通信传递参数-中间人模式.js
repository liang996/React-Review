import React, { Component } from "react";
import axios from "axios";


class Son extends Component {

  //点击获取数据
  isMovieDetails(e) {
    this.props.onEvent(e)
  }
  render() {

    const { grade, name, poster, synopsis } = this.props;

    return (
      <div
        onClick={() => { this.isMovieDetails(synopsis) }}
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid gray",
          margin: "0 10px 0",
          padding: "10px",
        }}
      >
        <img
          src={poster}
          style={{ height: "80px", width: "80px", paddingRight: "10px" }}
          alt={name}
        />
        <div
        >
          <h3 style={{ textAlign: "left" }}>{name}</h3>
          <h3 style={{ textAlign: "left" }}>观众评分{grade}</h3>
        </div>
      </div>

    );
  }
}

class SonInfo extends Component {

  render() {
    const { name } = this.props;

    return (
      <div style={{
        marginTop: "20px",
        height: "250px",
        background: "#EE82EE",
        color: "#8A2BE2"
      }}>

        <h2>我电影详情组件，电影信息为：</h2>
        <h3>{name}</h3>


      </div >
    );
  }
}

export default class Father extends Component {
  constructor() {
    super();
    this.state = {
      MovieList: [],
      name: ""
    };

    axios({
      url: "/test.json",
      methods: "get",
    })
      .then((response) => {
        // 因为层级比较深，匿名函数会导致this指向发生改变
        // 这个时候使用箭头函数解决
        console.log("数据是：", response.data.data.films);
        this.setState(
          {
            MovieList: response.data.data.films,
          }
        );
      })
      .catch((err) => alert("网络超时, 请重新加载!"));
  }
  synopsisName = (name) => {

    this.setState({
      name
    })
  }
  render() {
    const { MovieList, name } = this.state;


    console.log("接受数据是：", MovieList);

    return (
      <div>
        {
          MovieList.map(i =>

            <Son {...i} key={i.filmId} onEvent={this.synopsisName} />
          )
        }
        < SonInfo name={name} />

      </div >
    );
  }
}
