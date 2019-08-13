import React from 'react';
import { Table, Divider, Pagination } from 'antd';
import reqwest from 'reqwest';
import '../../public/css/App.css'


export default class BaseTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pagination: {},
      dataSource: [],
      loading: false
  
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
  }

  render() {
    let loading = true
    const { columns, dataSource, scroll, pagination, onRow } = this.props
    loading = this.props.loading
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
      // onChange={this.handleTableChange}
      ></Table>
    )
  }
}