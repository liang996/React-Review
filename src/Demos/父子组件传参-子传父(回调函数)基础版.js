import React, { Component } from 'react'


class Son extends Component {
  state = {
    nameNew: ""
  }

  ChangName = () => {
    const { nameNew } = this.state
    const { changName } = this.props
    //调用父组件中的函数
    changName(nameNew)

  }
  render() {

    const { name, age, sex } = this.props
    const { nameNew } = this.state

    return (

      <div>
        <h1>我是类定义到组件</h1>
        <br />
        <input type="text" value={nameNew} onChange={
          e => {
            this.setState(
              {
                nameNew: e.target.value
              }
            )
          }
        } />
        <button onClick={this.ChangName}>改变名称</button>

        <br />
        <br />

        我是Son组件-
        我接收到User组件传递过来到数据是:姓名为：{name},年龄为：{age},性别为：{sex}
      </div>
    )
  }
}


function Son1(props) {
  const { name, age, sex } = props

  return (
    <div>
      <h1>我是函数定义到组件</h1>

      我是Son1组件-
    我接收到User组件传递过来到数据是:姓名为：{name},年龄为：{age},性别为：{sex}
    </div>
  )
}


export default class Father extends Component {
  state = {
    name: "小米",
    age: 19,
    sex: "男"

  }
  isChangName = (name) => {
    //接收子组件传递过来的参数
    this.setState({
      name
    })


  }
  render() {
    const { name, age, sex } = this.state

    return (
      <div>
        <Son name={name} age={age} sex={sex} changName={this.isChangName} />

        <br />
        <br />
        <Son1  {...this.state} />

      </div>
    )
  }
}
