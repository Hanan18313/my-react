import React from 'react';
import { Table, Divider } from 'antd';
import reqwest from 'reqwest';
import CONFIG from '../../config'
import '../../public/css/App.css'


export default class BaseTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pagination: {},
  
    };
  }
  componentWillMount() {
    //this.fetch();
    // const { columns, dataSource, loading } = this.props
    // this.setState({
    //   columns,
    //   dataSource,
    //   loading,
    // })
    console.log(this.props)
  }

  handleTableChange = (pagination, filters,sorter) => {
    const paper = {...this.state.pagination}
    paper.current = pagination.current;
    this.setState({
      pagination:paper
    })

    this.fetch({
      results:pagination.pageSize,
      page:pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };

  fetch = (params = {}) => {
    this.setState({loading:true});
    reqwest({
      url:'https://randomuser.me/api',
      method:'GET',
      data:{
        results: 10,
        ...params,
      },
      type:'json'
    }).then(data => {
      const pagination = { ...this.state.pagination };
      pagination.total = data.totalCount;
      pagination.total = 200
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      })
    })
  };
  render() {
    let loading = true
    const { columns, dataSource } = this.props
    loading = this.props.loading
    return (
      <Table
      style={{width:'100%',minWidth:1200}}
      columns={columns}
      // rowKey={record => record.login.uuid}
      dataSource={dataSource}
      // pagination={this.state.pagination}
      loading={loading}
      // onChange={this.handleTableChange}
      ></Table>
    )
  }
}