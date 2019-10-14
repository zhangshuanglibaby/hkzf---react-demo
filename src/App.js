import React, { Component } from 'react';

//引入 封装的 tabbar
import  HKTabbar from './component/HKLayout/index';

//引入 路由
import { HashRouter as Router , Route } from 'react-router-dom'



// 引入 页面
import Home from './pages/Home';
import List from './pages/List';
import News from './pages/News';
import My from './pages/My';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={() => <HKTabbar ><Home /></HKTabbar>} />
          <Route exact path="/list" render={() => <HKTabbar ><List /></HKTabbar>} />
          <Route exact path="/news" render={() => <HKTabbar ><News /></HKTabbar>} />
          <Route exact path="/my" render={() => <HKTabbar ><My /></HKTabbar>}  />
        </Router>
      </div>
    )
  }
}
