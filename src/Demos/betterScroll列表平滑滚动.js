import React, { Component } from 'react'
import BScroll from '@better-scroll/core'

export default class User extends Component {
  state = {
    list: []
  }


  render() {
    let { list } = this.state

    console.log("list值为：", list)
    return (
      <div>
        <button onClick={this.isSearch} style={{ width: "15%" }}>🔍搜索</button>

        <div className="wrapper" style={{ height: "300px", background: "pink", overflow: "hidden" }}>

          <ol className="content">
            {
              list.map(item =>

                <li key={item}>{item}</li>


              )
            }


          </ol>
        </div>


      </div>
    )
  }

  isSearch = () => {
    //快速生成1-100的数组
    let list = [...Array(101).keys()].slice(1)
    console.log(list)
    //平滑滚动方案一
    // this.setState({
    //   list

    // }, () => {
    //   new BScroll(".wrapper")
    // })

    //平滑滚动方案二
    setTimeout(() => {
      this.setState({
        list
      })
      new BScroll(".wrapper")
    }, 0);


  }
}
