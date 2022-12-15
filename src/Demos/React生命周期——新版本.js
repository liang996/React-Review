import React, { Component } from 'react'

/**
 * 新生命周期执行顺序
 * 挂载阶段：
1.constructor
2.父：getDerivedStateFromProps：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps，他是一个静态方法，必须加static, 也必须加返回值，返回值可以是null ,也可以是空对象{}
3.父：render:挂载中，更新中
4.子：getDerivedStateFromProps：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps，他是一个静态方法，必须加static, 也必须加返回值，返回值可以是null ,也可以是空对象{}
5.子：componentDidMount：挂载完毕，常用于接口请求
5.父：componentDidMount：挂载完毕，常用于接口请求

 * 更新阶段：
1.父：getDerivedStateFromProps：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps，他是一个静态方法，必须加static, 也必须加返回值，返回值可以是null ,也可以是空对象{}
2.父：shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean
3.父：render:挂载中，更新中
4.子：getDerivedStateFromProps：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps，他是一个静态方法，必须加static, 也必须加返回值，返回值可以是null ,也可以是空对象{}
5.子：shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean
6.子：getSnapshotBeforeUpdate:在更新之前获取快照，使用必须加返回值，返回值可以是null ,也可以是空对象{}，子组件才管用
7.子：componentDidUpdate：更新阶段：更新完毕
8.父：componentDidUpdate：更新阶段：更新完毕
 * 卸载阶段：
 * componentWillUnmount：一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
 */


class Son extends Component {

  //挂载阶段
  componentDidMount() {
    console.log("子：componentDidMount：挂载完毕，常用于接口请求")
    this.timer = setInterval(() => {
      console.log("验证卸载生命周期卸载流程，当点击卸载组件按钮后，如果不通过卸载生命周期，则定时器继续进行")

    }, 1000);

  }
  //UNSAFE_componentWillMount和 UNSAFE_componentWillReceiveProps被getDerivedStateFromProps取代
  static getDerivedStateFromProps(nextProps, nextState) { //
    console.log("子：getDerivedStateFromProps：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps，他是一个静态方法，必须加static, 也必须加返回值，返回值可以是null ,也可以是空对象{}")
    console.log("nextProps", nextProps)
    // console.log("nextState", nextState)

    return {

    }

  }
  //更新阶段

  shouldComponentUpdate(nextProps, nextState) {
    console.log("子：shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean")

    if (this.props.name !== nextProps.name) return true //默认 :true为允许往下执行。false反之

    return false
  }
  //UNSAFE_componentWillUpdate被getSnapshotBeforeUpdate代替
  getSnapshotBeforeUpdate() {
    console.log("子：getSnapshotBeforeUpdate:在更新之前获取快照，使用必须加返回值，返回值可以是null ,也可以是空对象{}，子组件才管用")

    return {}
  }

  componentDidUpdate() {
    console.log("子：componentDidUpdate：更新阶段：更新完毕")

  }

  //卸载
  componentWillUnmount() {
    console.log("子：componentWillUnmount:一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息")

    //关闭定时器
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        接收到到值为：{this.props.name}
      </div>
    )
  }
}


export default class User extends Component {
  constructor() {
    super()
    console.log("constructor")
    this.state = {
      userName: "王力宏",
      isShow: true

    }

  }


  //UNSAFE_componentWillMount和 UNSAFE_componentWillReceiveProps被getDerivedStateFromProps取代
  static getDerivedStateFromProps() { //
    console.log("父：getDerivedStateFromProps：若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps，他是一个静态方法，必须加static, 也必须加返回值，返回值可以是null ,也可以是空对象{}")
    return {

    }

  }
  componentDidMount() {
    console.log("父：componentDidMount：挂载完毕，常用于接口请求")

  }



  shouldComponentUpdate(nextProps, nextState) {
    console.log("父：shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean")

    // if (this.state.userName !== nextState.userName) return true //默认 :true为允许往下执行。false反之

    // return false
    return true
  }




  componentDidUpdate() {
    console.log("父：componentDidUpdate：更新阶段：更新完毕")

  }
  render() {
    console.log("父：render:挂载中，更新中")
    return (
      <div>
        姓名是：
        {
          this.state.userName
        }
        <button onClick={
          () => {
            this.setState({
              userName: "林俊杰"
            })
          }
        }>更改姓名</button>
        <button onClick={
          () => {
            this.setState({
              isShow: false
            })
          }
        }>卸载组件</button>
        {this.state.isShow && <Son name={this.state.userName} />}

      </div >
    )
  }
}
