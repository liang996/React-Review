import React, { Component } from 'react'
import axios from 'axios'

export default class Movie extends Component {
  state = {
    MovieList: [],
    value: ""

  }
  constructor() {
    super()
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4269783',
      methods: 'get',
      // data: {
      //   dataList: []
      // }
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16560724491893449217343489","bc":"110100"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    })
      .then((response) => {
        // 因为层级比较深，匿名函数会导致this指向发生改变
        // 这个时候使用箭头函数解决

        this.setState({
          MovieList: response.data.data.cinemas,

        })
      })
      .catch((err) =>
        alert('网络超时, 请重新加载!')
      );

  }

  isSearchClear = () => {
    this.setState({
      value: ""
    })


  }
  getMovieList() {
    let { MovieList, value } = this.state
    return MovieList.filter(c =>
      c.name.toUpperCase().includes(value.toUpperCase())
    )
  }
  render() {
    let { value } = this.state

    return (
      <div>

        <div style={{ display: "flex", height: "30px" }}  >
          <input type="text" value={value} onChange={
            e => {
              this.setState({
                value: e.target.value
              })
            }
          } style={{ width: "85%" }} />
          <button onClick={this.isSearchClear} style={{ width: "15%" }}>清空</button>

        </div>

        <ol style={{ height: "10px", padding: "10px", listStyle: "none", }}>
          {
            this.getMovieList().map((c, i) => {
              return (

                <li key={c.cinemaId} >
                  <span style={{ color: "red", display: "inline" }}>{i + 1}.</span>  <span style={{ color: "pink", fontSize: "18px" }}> {c.name}</span>
                  <div style={{ borderBottom: "1px solid grey" }}> {c.address}</div>
                </li>
              )
            })
          }
        </ol>

      </div>
    )
  }
}
