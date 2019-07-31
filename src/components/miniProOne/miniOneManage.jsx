import React from 'react'
import Menus from '../common/Menu';
import Table from '../common/Table'
import { Row, Col } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import '../../public/css/Layout.css';
import CONFIG from '../../config';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class MiniOneManage extends React.Component {

    handleClick = e => {
        console.log(e)
        console.log(window.location)
    }

    render() {
        return (
            <div>
                <Layout>
                    <Layout>
                    <Sider width={260} style={{ background: '#fff' }}>
                        <Menus  />
                    </Sider>
                    <Layout style={{ padding: '24px 24px 24px' }}>
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                        <p>这是管理界面一</p>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>,
            </div>
        )
    }
}