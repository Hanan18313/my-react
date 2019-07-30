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

export default class Summer extends React.Component {

    render() {
        return (
            <div>
                <Layout>
                    <Layout>
                    <Sider width={260} style={{ background: '#fff' }}>
                        <Menus
                         menus={CONFIG.menus}/>
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
                        <Table/>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>,
            </div>
        )
    }
}