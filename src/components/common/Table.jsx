import React from 'react';
import { Table } from 'antd';
import reqwest from 'reqwest';
import CONFIG from '../../config'
import '../../public/css/App.css'

const column = [
  {
    title: '姓名',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%'
  },
  {
    title: '性别',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
]

export default class BaseTable extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  componentDidMount() {
    this.fetch();
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
    return (
      <Table
      columns={column}
      rowKey={record => record.login.uuid}
      dataSource={this.state.data}
      pagination={this.state.pagination}
      loading={this.state.loading}
      onChange={this.handleTableChange}
      ></Table>
    )
  }
}