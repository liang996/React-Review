import React, { Component } from 'react'

export default class TabNav extends Component {

  isClick(index) {
    console.log("index,,111,", index);

    const { isChangeTab } = this.props
    isChangeTab(index)
  }

  render() {
    const { list, index } = this.props


    return (
      <ul>
        {
          list.map((c, i) => {
            return (
              <li
                key={c.id}
                className={i == index ? "txt" : ""}
                onClick={() =>
                  this.isClick(i)
                }
              >{c.txt}</li>
            )
          })
        }
      </ul>
    )
  }
}
