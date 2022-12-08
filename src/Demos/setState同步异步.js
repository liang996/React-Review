import React, { Component } from 'react'

export default class SetState extends Component {
  state = {
    count: 1
  }

  /**
   * 
   * 总结：
   * setState处在同步逻辑中，它是异步更新状态，更新真实dom
   * setState处在异步逻辑中，它是同步更新状态，更新真实dom
   * setState第一个参数是一个对象，可以接受第二个参数，第二个参数是一个回调函数，状态和dom更新完毕后就会触发，要想实时获取最新状态，就得靠第二个参数
   */

  render() {
    let { count } = this.state
    return (
      <div>
        {count}
        <button onClick={this.isAdd}>添加</button>
        <button onClick={this.isAdd1}>添加1</button>
        <button onClick={this.isAdd2}>添加2</button>


      </div>
    )
  }
  isAdd2 = () => {//这个点击第一次会打印2
    this.setState({
      count: this.state.count + 1
    })
    console.log("count值为：", this.state.count)

    this.setState({
      count: this.state.count + 1
    })
    console.log("count值为：", this.state.count)

    this.setState({
      count: this.state.count + 1
    })
    console.log("count值为：", this.state.count)

    this.setState({
      count: this.state.count + 1
    })
    console.log("count值为：", this.state.count)


  }
  isAdd = () => { //这个点击第一次会打印2


    this.setState({
      count: this.state.count + 1
    }, () => {
      //在setState第二个参数（回调函数）中，状态和dom已经更新完毕
      console.log("count值为：", this.state.count)

    })
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log("count值为：", this.state.count)

    })
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log("count值为：", this.state.count)

    })
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log("count值为：", this.state.count)

    })

  }


  isAdd1 = () => { //这个点击第一次会打印5

    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log("count值为：", this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log("count值为：", this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log("count值为：", this.state.count)

      this.setState({
        count: this.state.count + 1
      })
      console.log("count值为：", this.state.count)
    }, 0);


  }
}
