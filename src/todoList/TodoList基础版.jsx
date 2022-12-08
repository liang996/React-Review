import React, { Component } from 'react'
import './css/index.css'

export default class TodoList extends Component {

  myRef = React.createRef()
  state = {
    list: []
  }

  //列表添加
  listAdd = () => {
    // this.state.list.push(this.myRef.current.value) 不可取，不要直接修改状态
    //this.refs.txt.value 第一种取值 官方已经废弃
    //this.input1.value 第二种取值  推荐
    //this.myRef.current.value 第三种取值  官方推荐
    // let newList = this.state.list.slice() //这里进行深度复制，就是为了避免状态被修改 ，
    let newList = [...this.state.list]  // //这里也可以使用扩展运算符进行深度复制
    //  newList.push(this.refs.txt.value) 
    newList.push(this.input1.value)
    this.setState({
      list: newList
    })

    //输入完后清空输入框
    this.input1.value = ""

  }

  // 列表删除

  listDel = (index) => {
  console.log("当前下标为：",index);
  let newList =this.state.list.concat()  // //这里也可以使用扩展运算符进行深度复制
    newList.splice(index,1)
    this.setState({
      list: newList
    })


  }
  render() {
    let txt = <div>暂无数据,请添加人员!!!</div>
    let txt1 = <h2>人员列表</h2>

    return (
      <div>
        {/* <input type="text" ref={this.myRef}/>  通过api */}
        {/* <input type="text" ref="txt"  字符串目前不推荐 */}
        {txt1}
        <input type="text" ref={c => this.input1 = c} />
        <button onClick={this.listAdd}>添加</button>

        <ul>
          {this.state.list.map((item, index) =>
            <li key={index} style={{ background: "pink", margin: "20px 0" }}>
              {item}
              <button className="pj" onClick={this.listDel.bind(this, index)}>删除</button>
           

            </li>)
          }

        </ul>
        {this.state.list.length===0&&txt}
      </div>
    )
  }
}
