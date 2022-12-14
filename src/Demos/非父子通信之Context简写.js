import React, { Component } from "react";
import axios from "axios";

let GlobalContext = React.createContext();
const { Provider, Consumer } = GlobalContext

class Son extends Component {
  state = {
    synopsisName: "",
  };


  render() {
    const { grade, name, poster, synopsis } = this.props;

    return (
      <Consumer>
        {value => (
          <div
            onClick={() => {
              value.ChangeValue(synopsis)
            }}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid gray",
              x: "0 10px 0",
              padding: "10px",
            }}
          >
            <img
              src={poster}
              style={{ height: "80px", width: "80px", paddingRight: "10px" }}
              alt={name}
            />
            <div>
              <h3 style={{ textAlign: "left" }}>{name}</h3>
              <h3 style={{ textAlign: "left" }}>观众评分{grade}</h3>
            </div>
          </div>
        )}
      </Consumer>

    );
  }
}

class SonInfo extends Component {
  render() {
    return (
      <Consumer>
        {(value) => (
          <div
            style={{
              marginTop: "20px",
              height: "250px",
              background: "#EE82EE",
              color: "#8A2BE2",
            }}
          >
            <h2>我电影详情组件，电影信息为：</h2>
            <h3>{value.info
            }</h3>
          </div>
        )}
      </Consumer>

    );
  }
}

export default class Father extends Component {
  constructor() {
    super();
    this.state = {
      MovieList: [],
      info: "",
    };

    axios({
      url: "/test.json",
      methods: "get",
    })
      .then((response) => {
        // 因为层级比较深，匿名函数会导致this指向发生改变
        // 这个时候使用箭头函数解决
        console.log("数据是：", response.data.data.films);
        this.setState({
          MovieList: response.data.data.films,
        });
      })
      .catch((err) => alert("网络超时, 请重新加载!"));
  }



  render() {
    const { MovieList, info } = this.state;

    console.log("接受数据是：", MovieList);

    return (
      <Provider
        value={{
          info,
          ChangeValue: (value) => {

            console.log("hhhh,,,", value)
            this.setState({
              info: value,
            });
          }
        }}>
        <div>
          {MovieList.map((i) => (
            <Son {...i} key={i.filmId} />
          ))}
          <SonInfo />
        </div>
      </Provider>
    );
  }
}
