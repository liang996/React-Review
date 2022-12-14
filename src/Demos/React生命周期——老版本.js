import React, { Component } from 'react'

/**
 * 老生命周期执行顺序
 * 挂载阶段：
1.constructor
2.componentWillMount:将要挂载,适用场景为，将数据做初始化,目前官方不推荐使用
3.render:挂载中，更新中，只能访问this.props和this.state,不允许修改状态和dom输出
4.componentDidMount：挂载完毕，常用于接口请求
 * 更新阶段：
1.shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean
2.UNSAFE_componentWillUpdate：更新阶段：将要更新
3.75 render:挂载中，更新中
4.子：componentWillReceiveProps:组件将要接收新的props的钩子（即父组件修改状态会被触发）,针对父子组件
5.子：shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean
6.子：UNSAFE_componentWillUpdate：更新阶段：将要更新
7.子：componentDidUpdate：更新阶段：更新完毕
8.componentDidUpdate：更新阶段：更新完毕
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
  //更新阶段
  UNSAFE_componentWillReceiveProps() {
    console.log("子：componentWillReceiveProps:组件将要接收新的props的钩子,针对父子组件")

  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("子：shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean")

    if (this.props.name !== nextProps.name) return true //默认 :true为允许往下执行。false反之

    return false
  }
  UNSAFE_componentWillUpdate(nextProps) {
    console.log("子：UNSAFE_componentWillUpdate：更新阶段：将要更新")
    console.log("此时打印this.props.name，将会得到老的props值", this.props.name)

    console.log("要想得到最新的name值", nextProps.name)

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
  UNSAFE_componentWillMount() {
    console.log("componentWillMount:将要挂载,适用场景为，将数据做初始化,目前官方不推荐使用")

  }

  componentDidMount() {
    console.log("componentDidMount：挂载完毕，常用于接口请求")

  }
  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps:父组件无效")

  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean")

    // if (this.state.userName !== nextState.userName) return true //默认 :true为允许往下执行。false反之

    // return false
    return true
  }
  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate：更新阶段：将要更新")

  }
  componentDidUpdate() {
    console.log("componentDidUpdate：更新阶段：更新完毕")

  }
  render() {
    console.log("render:挂载中，更新中")
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
