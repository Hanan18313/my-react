import React from 'react';
import Menus from './common/Menu';
import Table from './common/Table'
import { Row, Col } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import '../public/css/Layout.css';
import CONFIG from '../config';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function App (){
       

    return (
        <div>
            <p>我是App组件</p>
        </div>
    )
}
