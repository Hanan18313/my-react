import React from 'react'
import { Menu, Icon } from 'antd';
import CONFIG from '../../config'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

export default class BaseTable extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = [];
  constructor(props) {
    super(props)
    this.state = {
      openKeys: ['miniNameOne'],
      selectedKeys:[]
    };
  }
  componentDidUpdate() {
    const href = window.location.hash.slice(1)
    CONFIG.menus.forEach((item,index) => {
      if(item.subMenus.length > 0){
        item.subMenus.forEach((itm,indx) => {
          if(itm.subpath == href){
            this.setState({
              selectedKeys:[itm.key]
            })
          }
        })
      }else if(item.path == '/Index'){
        this.setState({
          selectedKeys:['Index']
        })
      }
    })
  }

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

  handleClick(e){
    this.setState({
      selectedKeys:[e.key]
    })
  }


  render() {
    const { menus } = this.props
    const { selectedKeys } = this.state;
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        defaultSelectedKeys={this.state.selectedKeys}
        selectedKeys={this.state.selectedKeys}
        style={{ width: 260 }}
        onClick={e => this.handleClick(e)}
      >
        {CONFIG.menus.map(menu => {
          this.rootSubmenuKeys.push(menu.key)
          if(menu.subMenus.length == 0){
            return (
              <Menu.Item key='index'>
                <Link to='/Index'>首页</Link>
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
                    <Menu.Item key={subMenu.key}>
                      <Link to={subMenu.subpath}>{subMenu.text}</Link>
                    </Menu.Item>
                  )
                })}
              </SubMenu>
            )
          }
        })}
      </Menu>
    );
  }
}
