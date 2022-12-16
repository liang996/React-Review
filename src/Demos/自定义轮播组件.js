import React, { Component } from "react";
import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination]);


class SwiperComponent extends Component {

  render() {
    return (
      <div
        className="swiper"
        style={{
          height: "200px",
          backgroundColor: "pink",
        }}
      >
        <div className="swiper-wrapper">
          {this.props.children}
        </div>
        {/* 如果需要分页器 */}
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}


class SwiperItem extends Component {
  render() {
    return (
      <div className="swiper-slide">
        <img style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          flex: "1"

        }} src={this.props.children}></img>
      </div>

    )
  }
}



export default class SwiperDemo extends Component {

  state = {
    movieImg: [
      "https://static.maizuo.com/v5/upload/15952d5b1d8a2499ef4f57362e4bbe48.jpg",
      "https://pic.maizuo.com/usr/movie/fceeb41a1660d097d02fbcbda3191d8f.jpg",
      "https://pic.maizuo.com/usr/movie/2da2cc429af2610a0006d066db8384a3.jpg"
    ]
  }
  componentDidMount() {
    new Swiper(".swiper", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: true,

    });


  }
  render() {
    return (
      <div>
        <SwiperComponent>
          {/* <div className="swiper-slide">
            1111
        </div>
          <div className="swiper-slide">
            22
        </div>
          <div className="swiper-slide">
            33
        </div> */}
          {
            this.state.movieImg.map((item, index) =>

              <SwiperItem key={index}>{item}</SwiperItem>

            )
          }
        </SwiperComponent>
      </div>
    )
  }
}
