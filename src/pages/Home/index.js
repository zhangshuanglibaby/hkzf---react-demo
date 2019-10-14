import React, { Component } from 'react';
import axios from '../../utils/request';

import { Carousel } from 'antd-mobile';

import { baseUrl } from '../../utils/url'


export default class index extends Component {
  state = {
    swiperList : [],
    imgHeight: 176
  };

  //在该生命周期 发送请求
  componentDidMount() {
    axios.get('/home/swiper')
    .then(res => {
      console.log(res)
      this.setState({
        swiperList : res.data.body
      })
    })
  };

  // renderCarousel(isShow) {
  //   if(isShow) {
  //     return (
  //       <Carousel
  //       autoplay
  //       infinite
  //     >
  //       {this.state.swiperList.map(val => (
  //         <a
  //           key={val.id}
  //           href="http://www.alipay.com"
  //           style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
  //         >
  //           <img
  //             src={baseUrl + val.imgSrc}
  //             alt=""
  //             style={{ width: '100%', verticalAlign: 'top' }}
  //             onLoad={() => {
  //               window.dispatchEvent(new Event('resize'));
  //               this.setState({ imgHeight: 'auto' });
  //             }}
  //           />
  //         </a>
  //       ))}
  //     </Carousel>
  //     )
  //   }else {
  //     return null
  //   }
  // };

  render() {
    const { swiperList } = this.state
    return ( 
      <div >
        {/* 
          小细节 ： 由于页面一加载会马上执行render这里,此时的轮播图还没有数据会导致 轮播图不会自动播放
                    方法一 可以把<Carousel>里面的内容提取出来变成一个方法 在有数的时候再调用
                    方法二  使用逻辑并 的语法
        */}
      { swiperList.length && <Carousel
        autoplay
        infinite
      >
        {swiperList.map(val => (
          <a
            key={val.id}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={baseUrl + val.imgSrc}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>}
      </div>
    )
  }
}