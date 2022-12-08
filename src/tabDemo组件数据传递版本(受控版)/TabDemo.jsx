import React, { Component } from 'react'
import './css/index.css'
import Home from './components/Home'
import Movie from './components/Movie'
import User from './components/User'
import TabBar from './components/TabBar'
import NavBar from './components/NavBar'

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

  isTabBar=(index)=>{
    console.log("index,,,",index);
    this.setState({
      index
    })
  }
  isClickIndex=(index)=>{
    console.log("index,1,,",index);
    
    this.setState({
      index
    })
  }
  render() {
    let { list, index } = this.state

    return (
      <div>
        <NavBar ClickIndex={this.isClickIndex}/>
        {
          this.Exhibition()
        }

      <TabBar list={list} index={index} isChangeTab={this.isTabBar}/>

      </div>
    )
  }
}
