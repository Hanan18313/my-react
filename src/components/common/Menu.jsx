import React from 'react';
import CONFIG from '../../config';
import { Menu, Icon } from 'antd';
import '../../public/css/App.css';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

export default class BaseTable extends React.Component {
  
  rootSubmenuKeys = ['sub1']
  constructor(props) {
    super(props)
    this.state = {
      openKeys:['sub1']
    }
  }
  onOpenChange = openkeys => {
    const latestOpenKey = openkeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if(this.rootSubmenuKeys.indexOf(latestOpenKey) === -1){
      this.setState({openKeys:this.state.openKeys});
    }else{
      this.setState({
        openKeys:latestOpenKey ? [latestOpenKey] : []
      });
    }
  }
  handleClick = e => {
    console.log(e)
  }
  render() {
    return (
      <Menu
      onClick={this.handleClick}
      style={{width:260}}
      defaultSelectedKeys={['1']}
      mode="inline"
      >
        <Menu.Item
        key='1'
        >
          首页
          <Link to='/Index' />
        </Menu.Item>
        {this.props.menus.map(menu => {
          return (
            <SubMenu
              key={menu.id}
              title={
              <span>
                  {menu.text}
              </span>
              }
          >
              {menu.subMenus.map(subMenu => (
                  <Menu.Item href={subMenu.subpathname} key={subMenu.id}>{subMenu.text}
                      <Link to={subMenu.subpathname}></Link>
                  </Menu.Item>
                  
              ))}
          </SubMenu>
          )
        })}
      </Menu>
    )
  }
}
