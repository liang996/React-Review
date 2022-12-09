import React, { Component } from 'react'


class Filed extends Component {

  //监听输入
  isValueChang = (event) => {
    let { ChangValue } = this.props
    ChangValue(
      event.target.value
    )
  }

  render() {
    let { title, type, value } = this.props
    return (
      <div>
        <label>{title}:</label>
        <input type={type} onChange={this.isValueChang} value={value}></input>
      </div>
    )
  }
}


export default class UseFiled extends Component {

  state = {
    name: "",
    pwd: ""
  }

  //登录
  isLogin = () => {
    const { name, pwd } = this.state
    alert(`你输入的用户名是：${name},你输入的密码是：${pwd}`)
  }

  //重置
  isRest = () => {
    this.setState({
      name: "",
      pwd: ""
    })


  }
  //输入
  isChangValue = (dataType) => {
    // 高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
    // 					1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
    // 					2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
    // 					常见的高阶函数有：Promise、setTimeout、arr.map()等等
    // isChangValue这个就是一个高阶函数
    return (value) => {
      this.setState({ [dataType]: value })
    }
  }

  render() {
    const { name, pwd } = this.state

    return (
      <div>
        <Filed title="用户名" type="text" value={name} ChangValue={this.isChangValue("name")} />
        <Filed title="密码" type="password" value={pwd} ChangValue={this.isChangValue("pwd")} />
        <br />
        &nbsp;&nbsp; <button onClick={this.isLogin}>登录</button>&nbsp;&nbsp;
        <button onClick={this.isRest}>重置</button>

      </div>
    )
  }
}
