import React, { Component } from 'react'
import './css/index.css'
import Home from './components/Home'
import Movie from './components/Movie'
import User from './components/User'

export default class TabDemo extends Component {
  state = {
    index: 0,
    list: [
      {
        id: 1,
        txt: "首页"

      }, {
        id: 2,
        txt: "电影"
      }, {
        id: 3,
        txt: "我的"
      }
    ]
  }

  isClick(index) {
    this.setState({
      index
    })
  }


  Exhibition() {
    let { index } = this.state
    switch (index) {
      case 0:
        return <Home />;
      case 1:
        return <Movie />;
      case 2:
        return <User />;
      default:
        return "程序出错了";
    }

  }


  render() {
    let { list, index } = this.state

    return (
      <div>
        {
          this.Exhibition()
        }

        <ul>
          {
            list.map((c, i) => {
              return (
                <li
                  key={c.id}
                  className={i == index ? "txt" : ""}
                  onClick={() =>
                    this.isClick(i)
                  }
                >{c.txt}</li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}
