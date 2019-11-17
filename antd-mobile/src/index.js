import React from 'react';
import ReactDOM from 'react-dom';
//容器组件 / UI组件（展示组件）
import APP from './App'
//引哪个组件，就引入哪一个组件的css
import 'antd-mobile/dist/antd-mobile.css';//引入css手机端
import './index.css';
//智能组件 / 木偶组件

//容器组件（container/pages）:逻辑，功能
//UI组件（components）:写成函数组件,展示，返回React元素

ReactDOM.render(
    <APP />,
    document.getElementById('root')
)
