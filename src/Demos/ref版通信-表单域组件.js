import React, { Component } from 'react'


class Filed extends Component {
  state = {
    value: ""
  }

  //监听输入
  isValueChang = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  //清空输入框
  isRestValue = () => {
    this.setState({
      value: ""
    })
  }
  render() {
    let { title, type } = this.props
    let { value } = this.state

    return (
      <div>
        <label>{title}:</label>
        <input type={type} onChange={this.isValueChang} value={value}></input>
      </div>
    )
  }
}


export default class UseFiled extends Component {
  userName = React.createRef()
  userPwd = React.createRef()



  //登录
  isLogin = () => {
    const name = this.userName.current.state.value
    const pwd = this.userPwd.current.state.value

    alert(`你输入的用户名是：${name},你输入的密码是：${pwd}`)


  }

  //重置
  isRest = () => {

    this.userName.current.isRestValue()
    this.userPwd.current.isRestValue()
  }

  render() {

    return (
      <div>
        <Filed title="用户名" type="text" ref={this.userName} />
        <Filed title="密码" type="password" ref={this.userPwd} />
        <br />
        &nbsp;&nbsp; <button onClick={this.isLogin}>登录</button>&nbsp;&nbsp;
        <button onClick={this.isRest}>重置</button>

      </div>
    )
  }
}
