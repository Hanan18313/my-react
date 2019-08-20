import React from 'react';
import { Table, Divider, Pagination } from 'antd';
import reqwest from 'reqwest';
import '../../public/css/App.css';
import axios from 'axios'


export default class BaseTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pagination: {},
      dataSource: [],
      loading: false,
      params:{}
    };
  }
  
  componentWillMount() {
   // console.log('加载willTable组件')
    //this.fetch();
    // const { columns, dataSource, loading } = this.props
    // this.setState({
    //   columns,
    //   dataSource,
    //   loading,
    // })
  }
  componentDidMount() {
    //console.log('加载didTable组件')
    this.setState({
      params: this.props.filterParams
    })
  }

  handleTableChange = () => {
    let params = this.state.params
    console.log(params)
    this.Fetch(params)
  }
  Fetch(params){
    axios.get(params.req_url,{
      headers: {
        'Content-Type':'application/json'
      },
      params:{
        page: params.page,
        pageSize: params.pageSize
      }
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    const { columns, dataSource, scroll, pagination, onRow, loading, filterParams } = this.props
   // console.log(this.props)
    
    return (
      <Table
      style={{width:'100%'}}
      onRow={onRow}
      columns={columns}
      rowKey={record => record.id}
      dataSource={dataSource}
      loading={loading}
      scroll={scroll}
      pagination={pagination}
      onChange={this.handleTableChange}
      ></Table>
    )
  }
}