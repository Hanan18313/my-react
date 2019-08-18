import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
// import miniSampleOneManageOne from './miniSampleTwo/ManageOne';
// import miniSampleOneManageTwo from './miniSampleOne/ManageTwo';
// import miniSampleOneManageThree from './miniSampleOne/ManageThree';
// import miniSampleTwoManageOne from './miniSampleTwo/ManageOne';
// import miniSampleTwoManageTwo from './miniSampleTwo/ManageTwo';
// import EditUserInfo from './miniSampleOne/EditUserInfo';
import ActionTrainSignUp from './actionTrain/ActionTrain-signUp'
import '../public/css/Layout.css';
import '../public/css/App.css';
import axios from 'axios';
import urlList from '../public/js/Common';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Center extends React.Component {
    rootSubmenuKeys = [];
    state = {
        openKeys: ['index'],
        current:[],
        MenuSider:[]
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
    Fetch(){
        //let token = window.top.sessionStorage.getItem('token');
        let token = 'eyJkYXRhIjp7InVzZXJJZCI6IjE4MDIiLCJwYXNzV29yZCI6ImUxMGFkYzM5NDliYTU5YWJiZTU2ZTA1N2YyMGY4ODNlIn0sImNyZWF0ZWQiOjE1NjU1NzAwODczNjIsImV4cCI6MzYwMDAwMH0=.wPlTMyuS2DW3z69n8q55fvt+lKPoETXm3CAFf8Y7Dkg='
        axios.get(urlList.getMenuSider,{
            headers:{
                "Content-Type":"application/json",
                //'Token':token
            },
            
        }).then(menu => {
            if(menu.status == 200){
                //console.log(menu)
                this.setState({
                    MenuSider:menu.data
                })
                menu.data.forEach((item,index) => {
                    this.rootSubmenuKeys.push(item.key)
                })
            }
        })
    }
    componentWillMount() {
        
        this.Fetch()
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
                        defaultSelectedKeys={['index']}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        onClick={this.handleClick}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            {this.state.MenuSider.map(menu => {
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
                                                        <Link to={subMenu.path}>{subMenu.text}</Link>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 0 24px 24px' }}>
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 600,
                        }}
                        >
                            <Switch>           
                                {/* <Route path='/Home' component={Home}/> */}
                                <Route path='/index' component={Home} />
                                {/* <Route path='/firstAppletMan1' component={miniSampleOneManageOne} />
                                <Route path='/firstAppletMan2' component={miniSampleOneManageTwo} />
                                <Route path='/firstAppletMan3' component={miniSampleOneManageThree} />
                                <Route path='/secondAppletMan1' component={miniSampleTwoManageOne} />
                                <Route path='/secondAppletMan2' component={miniSampleTwoManageTwo} />
                                <Route path='/EditUserInfo' component={EditUserInfo} /> */}
                                <Route path="/actionTrain/signUp" component={ActionTrainSignUp} />>
                                <Redirect from='/' to='/index'/>
                            </Switch>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}