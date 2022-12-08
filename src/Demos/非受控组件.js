import React, { Component } from "react";

export default class User extends Component {
  myRef = React.createRef();
  isLogin = () => {
    console.log(this.myRef.current.value);
  };
  isRest = () => {
    this.myRef.current.value = "";
  };
  render() {
    return (
      <div>
        {/* <input ref={this.myRef} type="text" value="小米"></input> 
        会报Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
        警告：您为没有“onChange”处理程序的表单字段提供了“value”属性。这将呈现只读字段。如果字段应该是可变的，请使用“defaultValue”。否则，请设置“onChange”或“readOnly”。*/}
        <input ref={this.myRef} type="text" defaultValue="小米"></input>
        <button onClick={this.isLogin}>登入</button>
        <button onClick={this.isRest}>重置</button>
      </div>
    );
  }
}
