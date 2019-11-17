import { TabBar } from 'antd-mobile';
import React from 'react'
import AppHome from './AppHome'
import AppIdea from './AppIdea'
import AppShop from './AppShop'
import Background from '../imgs/linggan.png'
import Background1 from '../imgs/linggan1.png'
import Background2 from '../imgs/shangcheng.png'
import Background3 from '../imgs/shangcheng (1).png'

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        //确定打开是第几个页面
      selectedTab: 'none',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
      <div style={  { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22}} className='iconfont icon-home'></i>}
            //选中和不选中颜色不一样
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-home'></i>
            
            }
            selected={this.state.selectedTab === 'blueTab'}
            //onpress的时候设置了一个状态
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
              {/* //引入apphome组件，开头也要引用 */}
           <AppHome /> 
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '35px',
                height: '35px',
                background: `url(${Background}) center center /  35px 35px no-repeat ` ,
              }}

             
              />
            }
            selectedIcon={
              <div style={{
                width: '35px',
                height: '35px',
                background: `url(${Background1}) center center / 35px 35px   no-repeat` }}
              />
            }
            title="灵感"
            key="Idea"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
          <AppIdea/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '35px',
                height: '35px',
                background: `url(${Background2}) center center /  35px 35px no-repeat ` }}
             
              />
            }
            selectedIcon={
              <div style={{
                width: '35px',
                height: '35px',
                background: `url(${Background3}) center center /  35px 35px no-repeat ` }}
             
              />
            }
            title="商城"
            key="Shop"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppShop/>
          </TabBar.Item>
          <TabBar.Item
             icon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>}
             selectedIcon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>}
             title="我的"
             key="my"
             selected={this.state.selectedTab === 'yellowTab'}
             onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

