import React, { PureComponent } from 'react'

/**
 * 性能优化
：
1.shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean
2.使用PuerComponent:使用PuerComponent会帮你进行新旧props,新旧state,从而来决定shouldComponentUpadte是的为true或false
 */




export default class User extends PureComponent {
  constructor() {
    super()
    console.log("constructor")
    this.state = {
      userName: "王力宏",

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
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate：用于控制组件更新的阀门，接收两个形参，一个是新的属性（props）,一个是新的状态（state）,返回结果是一个boolean")

  //   if (this.state.userName !== nextState.userName) return true //默认 :true为允许往下执行。false反之

  //   return false
  // }
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


      </div >
    )
  }
}
