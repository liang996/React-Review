import React, { Component } from "react";

export default class NavBar extends Component {
  isHome = () => {
    this.props.ClickIndex(0)
  }
  isUser = () => {
    this.props.ClickIndex(2)

  }
  render() {
    return (
      <div className="NavBar-top">
        <div className="NavBar-middel">
          <button onClick={this.isHome}>首页</button>
          <h3>❤️看电影</h3>
          <button onClick={this.isUser}>我的</button>
        </div>

      </div>
    );
  }
}
