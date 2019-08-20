import React from 'react';
import { Table, } from 'antd'
import axios from 'axios'

export default class BaseTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pagination: {
                current: 1,
                pageSize: '',
                total: 0,
                keyWord:'',
                order:'',
                filter: {},
                showSizeChange: true,
                pageSizeOptions: ['30','50','100','200'],
                onShowSizeChange:(current, pageSize) => {
                    const pagination = this.state
                    pagination.pageSize = pageSize
                    this.setState({
                        pageSize,
                    })
                }
            },
            loading: false,
            data: []
        }
    }

    componentDidMount() {

    }

    //筛选
    filterTable() {
        console.log('筛选方法')
    }
    //排序
    sortTable(){
        console.log('排序方法')
    }
    //跳转指定id的item
    navigateToItem() {
        console.log('跳转到指定item')
    }
    //获取列表
    obtainTable(req_url) {
        this.setState({loading: true})
        let { current, pageSize, keyWord, order, filter } = this.state.pagination
        axios.get(req_url,{
            params: {
                current: current,
                pageSize: pageSize,
                keyWord: keyWord,
                order: order,
                filter: JSON.stringify(filter)
            },
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => {
            let data = res.data.data.rows;
            let total = res.data.data.count;
            const pagination = { ...this.state.pagination }
            pagination.total = total
            this.setState({
                pagination,
                data,
                loading: false
            })

        })
    }

    //渲染table
    tableRender(params) {
        console.log('渲染table')
        const { table_h, table_w, columns, data } = params
        return(
            <Table
            columns={columns}
            scroll={{x: table_w, y: table_h}}
            dataSource={data}
            >

            </Table>
        )
    }

    //搜索
    searchTable() {
        console.log('搜索')
    }

    //分页

    render() {
        return(
            <p>table基类</p>
        )
    }
}