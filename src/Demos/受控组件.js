import React, { Component } from 'react'

export default class User extends Component {
  state = {
    name: "小米"
  }
  isLogin = () => {
    let { name } = this.state

    console.log(name)
  }
  isRest = () => {

    this.setState({
      name: ""
    })

  }
  render() {
    let { name } = this.state
    return (
      <div>

        <input type="text" value={name} onChange={
          (e) =>
            this.setState({
              name: e.target.value
            })

        }></input>
        <button onClick={this.isLogin}>登入</button>
        <button onClick={this.isRest}>重置</button>

      </div>
    )
  }
}
