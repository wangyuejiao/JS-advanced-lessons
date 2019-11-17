import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'
import { WingBlank, SearchBar, Badge,Carousel,Grid,WhiteSpace} from 'antd-mobile';
import Background2 from '../imgs/coffer0_03.jpg'

// const data = Array.from(new Array(5)).map((_val, i) => ({
//     icon: require(`../imgs/shop${i}.jpg`) 
//   }));
const array = [
    {icon:require(`../imgs/shop0.jpg`),text:'桌'},
    {icon:require(`../imgs/shop1.jpg`),text:'床'},
    {icon:require(`../imgs/shop2.jpg`),text:'椅'},
    {icon:require(`../imgs/shop3.jpg`),text:'几'},
    {icon:require(`../imgs/shop4.jpg`),text:'柜'},
    {icon:require(`../imgs/shop5_03.jpg`),text:'书架'},
    {icon:require(`../imgs/shop6_03.jpg`),text:'沙发'},
    {icon:require(`../imgs/shop7_03.jpg`),text:'家居饰品'},
    {icon:require(`../imgs/shop8_03.jpg`),text:'户外家居'},
    {icon:require(`../imgs/shop9_03.jpg`),text:'全部分类'},
];

const data = Array.from(new Array(10)).map((_val, dataItem) => ({
       icon: dataItem.icon,
       text:dataItem.text
     }));
 const PlaceHolder = ({ className = '', ...restProps }) => (
      <                             div className={`${className} placeholder`} {...restProps}>
                                    </div>
                     );
    


export default class AppShop extends Component {
    render() {
        return (
            <div>
                <NavBar
                     style={{backgroundColor:'#3fcccb',color:'#eeeeee',fontSize:16}}
                     rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                          ]}
               >商城    
               </NavBar>
                {/* 轮播图 */}
                <div style={{ height: '150px' }}>
                     <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                         >
                          {[1,2,3].map(val => (
                          <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%' ,height:150 }}
                           >
                          <img
                            src={require(`../imgs/eleven${val}.jpg`)}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                     window.dispatchEvent(new Event('resize'));
                                     this.setState({ imgHeight: 'auto' });
                            }}
                            
                              />
                             </a>
                              ))}
                         </Carousel>
                         <div style={{backgroundColor:'#eeeeee',width:'100%',height:'50px',position:'fixed',top:'45px'}}>
                            <img src={require(`../imgs/商城_03.jpg`)} style={{backgroundColor:'white',position:'absolute',top:'3px',left:'5px',opacity:'0.1'}} ></img>
                            <WingBlank><div className="sub-title" style={{color:'black',fontSize:'14px'}}></div></WingBlank>
                            <SearchBar style={{width:'250px',position:'absolute',right:'20px'}}placeholder="输入关键字搜索" ref={ref => this.autoFocusInst = ref} />
                         </div>
              </div>   
                <div style={{ height: '128px' }}>
                           <Grid
                            // hasLine={false}
                            columnNum={5} 
                            data={array}
                            renderItem={dataItem => (
     
                        <div >
                               <img src={dataItem.icon} style={{ width: '25px', height: '25px'}} alt="" />
                               <div style={{ color: '#888', fontSize: '14px' }}>
                                           <span>{dataItem.text}</span>
                               </div>
                       </div>
              )}
             />
            </div>
                <div style={{backgroundColor:'#eeeeee',height:'450px',width:'100%'}}>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                        <WingBlank style={{ 
                                            color: '#bbb',
                                            textAlign: 'center',
                                            // height: '150px',
                                            // lineHeight: '150px',
                                            width:'40%',
                                            float:'left'
                                           }}>
                          {/* <PlaceHolder /> */}
                          <img src={require(`../imgs/coffer0_03.jpg`)} style={{width:'100%',height:'150'}}></img>
                           <p style={{height:'10px',display:'inline-block',width:'100%'}}>Top Art Studio 欧式</p>
                           <p style={{height:'20px',display:'inline-block',}}>￥39</p>
                       </WingBlank>
                       
                       
                       <WingBlank style={{  
                                           
                                            color: '#bbb',
                                            textAlign: 'center',
                                            width:'40%',
                                            float:'left'
                                           }}>
                          {/* <PlaceHolder /> */}
                               <img src={require(`../imgs/coffer1_03.jpg`)} style={{width:'100%',height:'150'}}></img>
                               <p style={{width:'100%',height:'10px'}}>Top Art Studio 欧式</p>
                               <p style={{width:'100%',height:'10px'}}>￥39.95</p>
                               
                       </WingBlank>

                       <WingBlank style={{  
                                           color: '#bbb',
                                           textAlign: 'center',
                                           width:'90%',
                                           float:'left'
                                          }}>
                         {/* <PlaceHolder /> */}
                              <img src={require(`../imgs/coffer1_03.jpg`)} style={{width:'100%',height:'120'}}></img>
                              
                      </WingBlank>
            

                       
               </div>

                </div>

    
        )}}
    
    
