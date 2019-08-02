import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import CONFIG from '../config';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import miniSampleOneManageOne from './miniSampleTwo/ManageOne';
import miniSampleOneManageTwo from './miniSampleOne/ManageTwo';
import miniSampleOneManageThree from './miniSampleOne/ManageThree';
import miniSampleTwoManageOne from './miniSampleTwo/ManageOne';
import miniSampleTwoManageTwo from './miniSampleTwo/ManageTwo';
import '../public/css/Layout.css'
import '../public/css/App.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Center extends React.Component {
    rootSubmenuKeys = [];
    state = {
        openKeys: ['Index'],
        current:[]
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    handleClick(e) {
        
        
    }
    componentWillMount() {
        const menu = CONFIG.menus
        menu.forEach((item, index) => {
            this.rootSubmenuKeys.push(item.key)
        })
    }
    componentDidUpdate(){
        console.log('执行componentDidUpdate')
    }

    render () {
        return (
            <div>
                <Layout>
                    {/* <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                    </Header> */}
                    
                    <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['Index']}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        onClick={this.handleClick}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            {CONFIG.menus.map(menu => {
                                if(menu.subMenus.length == 0){
                                    return (
                                        <Menu.Item
                                        key={menu.key}
                                        >
                                            <Link to={menu.path}>{menu.text}</Link>
                                        </Menu.Item>
                                    )
                                }else{
                                    return (
                                        <SubMenu
                                        key={menu.key}
                                        title={
                                            <span>{menu.text}</span>
                                        }
                                        >
                                            {menu.subMenus.map(subMenu => {
                                                return (
                                                    <Menu.Item
                                                    key={subMenu.key}
                                                    >
                                                        <Link to={subMenu.subpath}>{subMenu.text}</Link>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 480,
                        }}
                        >
                            <Switch>           
                                {/* <Route path='/Home' component={Home}/> */}
                                <Route path='/Index' component={Home} />
                                <Route path='/miniOne/ManageOne' component={miniSampleOneManageOne} />
                                <Route path='/miniOne/ManageTwo' component={miniSampleOneManageTwo} />
                                <Route path='/miniOne/ManageThree' component={miniSampleOneManageThree} />
                                <Route path='/miniTwo/ManageOne' component={miniSampleTwoManageOne} />
                                <Route path='/miniTwo/ManageTwo' component={miniSampleTwoManageTwo} />
                                {/* <Redirect from='/' to='/Home'/> */}
                            </Switch>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}