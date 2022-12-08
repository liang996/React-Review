import React, { Component } from "react";
import "./css/index.css";

export default class TodoList extends Component {
  myRef = React.createRef();
  state = {
    list: [],
    value: "",
  };

  //列表添加
  listAdd = () => {
    let { value } = this.state;
    // let newList = this.state.list.slice() //这里进行深度复制，就是为了避免状态被修改 ，
    let newList = [...this.state.list]; // //这里也可以使用扩展运算符进行深度复制
    //  newList.push(this.refs.txt.value)
    newList.push(value);
    this.setState({
      list: newList,
      //输入完后清空输入框
      value: "",
    });
  };

  // 列表删除

  listDel = (index) => {
    console.log("当前下标为：", index);
    let newList = this.state.list.concat(); // //这里也可以使用扩展运算符进行深度复制
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  };
  render() {
    let { value } = this.state;
    let txt = <div>暂无数据,请添加人员!!!</div>;
    let txt1 = <h2>人员列表</h2>;
    return (
      <div>
       
        {txt1}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            this.setState({
              value: e.target.value,
            });
          }}
        />
        <button onClick={this.listAdd}>添加</button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={index} style={{ background: "pink", margin: "20px 0" }}>
              {item}
              <button className="pj" onClick={this.listDel.bind(this, index)}>
                删除
              </button>
            </li>
          ))}
        </ul>
        {this.state.list.length === 0 && txt}
      </div>
    );
  }
}
