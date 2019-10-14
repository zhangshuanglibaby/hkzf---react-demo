import React from 'react' ;

import { TabBar } from 'antd-mobile';

//引入withRouter
import { withRouter } from 'react-router-dom'

class HKTabbar extends React.Component {
  render() {
      // console.log(this.props)
      const {location} = this.props;
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#00bea8"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={<i style={{fontSize : '20px'}} className="iconfont icon-ind"></i>}
            selectedIcon={<i style={{fontSize : '20px'}} className="iconfont icon-ind"></i>}
            selected={ location.pathname === '/'}
            onPress={() => {
              this.props.history.push('/')
            }}
          >
              {/* 细节是  要路由是对应的路由才显示对应的内容 */}
              {location.pathname === '/' && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize : '20px'}} className="iconfont icon-findHouse"></i>}
            selectedIcon={<i style={{fontSize : '20px'}} className="iconfont icon-findHouse"></i>}
            title="找房"
            key="list"
            selected={ location.pathname === '/list'}
            onPress={() => {
              this.props.history.push('/list')
            }}
          >
            {location.pathname === '/list' && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize : '20px'}} className="iconfont icon-infom"></i>}
            selectedIcon={<i style={{fontSize : '20px'}} className="iconfont icon-infom"></i>}
            title="咨询"
            key="news"
            selected={location.pathname === '/news'}
            onPress={() => {
              this.props.history.push('/news')
            }}
          >
            {location.pathname === '/list' && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize : '20px'}} className="iconfont icon-my"></i>}
            selectedIcon={<i style={{fontSize : '20px'}} className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={location.pathname === '/my'}
            onPress={() => {
              this.props.history.push('/my')
            }}
          >
            {location.pathname === '/my' && this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(HKTabbar);