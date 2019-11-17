import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'
import { Tabs, WhiteSpace, Badge,Carousel} from 'antd-mobile';
import { Grid } from 'antd-mobile';
import Background from'../imgs/住吧首页_02.jpg'
import Background1 from '../imgs/英伦.jpg'
import Background2 from '../imgs/timg3.png'


const data = Array.from(new Array(3)).map((_val, i) => ({
  icon: require(`../imgs/${i}.gif`)
  
}));

const PlaceHolder = ({ className = '', ...restProps }) => (
  <                             div style={{
                                             height:200,
                                             background:`url(${Background1}) center center  no-repeat `,
                                             textAlign:'center',
                                             paddingTop:160,
                                             fontSize:20,
                                             width:'100%',
                                             color:'white'}}
                                    className={`${className} placeholder`} {...restProps}>什么是英伦装修风格 英伦风家装</div>
                 );
export default class AppHome extends Component {
    
    render() {
        return (
            <div>
               <NavBar
                     style={{backgroundColor:'#3fcccb',color:'#eeeeee',fontSize:16}}
               >住吧家居</NavBar>
               
               {/* //轮播图       */}
              <div style={{ height: '150px' }}>
                     <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                         >
                          {[1,2].map(val => (
                          <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height:200  }}
                           >
                          <img
                            src={require(`../imgs/${val}.png`)}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                     window.dispatchEvent(new Event('resize'));
                                     this.setState({ imgHeight: 'auto' });
                            }}
                              />
                             </a>
                              ))}
                         </Carousel>
              </div>
                   {/* display；flex是为了居中 */}
              <div style={{ height: '150px' }}>
                           <Grid
                            // hasLine={false}
                            columnNum={3} 
                            data={data}
                            renderItem={dataItem => (
     
                        <div >
                               <img src={dataItem.icon} style={{ width: '90px', height: '100px'}} alt="" />
                       </div>
      )}
    />
            </div>
              <div style={{height: '50px',backgroundColor:"#eeeeee" }}>
                                  <div>
                                         <WhiteSpace size="sm" />
                                         <div style={{
                                                 width: '6px',
                                                 height: '35px',
                                                 background: `url(${Background}) center center  no-repeat ` ,
                                                 float:'left'
                                         }}></div>  
                                         <div style={{float:'left',fontSize:25,paddingLeft:'5px'}}>热门推荐</div>  
                                 </div>

                        
              </div>
              <div style={{ height: '400px' }}>
                  

                               <WhiteSpace size="xs" />
                               <PlaceHolder />

                              <WhiteSpace size="lg" />
                              <div style={{
                                              height: '180px',
                                              background: `url(${Background2}) center center  no-repeat ` ,
                                    }}></div>   
                  </div>
    
         
          </div>
          
              
            
        )
    }
}
