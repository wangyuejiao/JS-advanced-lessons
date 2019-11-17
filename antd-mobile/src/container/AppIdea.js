import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'
import { Tabs, WhiteSpace, Badge,Carousel,WingBlank} from 'antd-mobile';
import { Grid } from 'antd-mobile';
import Background from '../imgs/timg2.png'

const tabs = [
    { title:'推荐' },
    { title:'冬季' },
    { title:'宜家' },
    { title:'小清新' },
    { title:'小户型' },
    { title:'个性色彩' },
    { title:'+' },
];

const data = Array.from(new Array(2)).map((_val, i) => ({
  icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  background: `url(${Background})`,
  text: `name${i}`,
}));

export default class AppIdea extends Component {
    render() {
        return (
            <div>
               <NavBar
                     style={{backgroundColor:'#3fcccb',color:'#eeeeee',fontSize:16}}
                     rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '=16px' }} />,
                ]}
               >灵感</NavBar>
            
            <Tabs tabs={tabs}
                 //改成0默认成进来是首页
                  initialPage={0}
                  onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >      
                  
                   <div style={{backgroundColor:'#eeeeee',height:'600px',width:'100%'}}>
                         <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>
                   </div>
                  

                   
                   {/* display；flex是为了居中 */}
                   <div style={{backgroundColor:'#eeeeee',height:'600px',width:'100%'}}>
                         <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>
                   </div>
                   <div style={{backgroundColor:'#eeeeee',height:'600px',width:'100%'}}>
                         <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>
                   </div>
                   <div style={{backgroundColor:'#eeeeee',height:'600px',width:'100%'}}>
                         <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>

                       <WhiteSpace size="lg" />
                         <WhiteSpace size="lg" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            height: '180px',
                                            lineHeight: '180px',
                                            width:'41%',
                                            float:'left',
                                            display:'inline-block',
                                            margin:'0px'
                                        
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_03.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                        </WingBlank>
                        <WingBlank style={{
                                             color: '#bbb',
                                             textAlign: 'center',
                                             height: '180px',
                                             lineHeight: '180px',
                                             width:'41%',
                                             float:'right',
                                             display:'inline-block',
                                             margin:'0px'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/灵感_04.jpg`)} style={{width:'100%',height:'180',float:'left'}}></img>
                       </WingBlank>
                   </div>
          </Tabs>
          <WhiteSpace />
          </div>
          
              
            
        )
    }
}

