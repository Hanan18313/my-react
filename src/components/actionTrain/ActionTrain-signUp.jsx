import react from 'react';

import React from 'react';
import Table from '../common/Table';
import axios from 'axios';
import urlList from '../../public/js/Common'
import { Divider, Avatar, Tooltip, Pagination, Select } from 'antd';
import moment from 'moment'

const { Option } = Select

const COLUMNS = [
    {
        title: '姓名',
        dataIndex: 'name',
        width:200
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        width:200
    },
    {
        title: '公司名称',
        dataIndex: 'company',
        width:260
    },
    {
        title: '头像',
        dataIndex: 'portrait',
        width:200,
        render: (text,record) => {
            return (
                <Avatar src={text}/>
            )
        }
    },
    {
        title: '报名时间',
        dataIndex: 'sign_time',
        width:200,
        render:(text) => {
            return (
                <p>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</p>
            )
        }
    },
    {
        title: '报名状态',
        dataIndex: 'state',
        width:200,
        render: (text) => {
            if(text === 1){
                text = '已报名'
                
            }else if(text === 0){
                text = '未报名'
            }
            return (
                <Select defaultValue={text} style={{width:120}} disabled={true}>
                    <Option value={1}>已报名</Option>
                    <Option value={0}>未报名</Option>
                </Select>
            )
        }
    },
    {
        title: '是否晚餐',
        dataIndex: 'need_dinner',
        width:200,
        render: (text) => {
            if(text === 1){
                text = '是'
                
            }else if(text === 0){
                text = '否'
            }
            return (
                <Select defaultValue={text} style={{width:120}} disabled={true}>
                    <Option value={1}>是</Option>
                    <Option value={0}>否</Option>
                </Select>
            )
        }
    },
]

export default class ActionTrainSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            pageSize: 30,
            dataSource: [],
            countAll:0,
            loading: true
        }
    }
    componentDidMount() {
        let params = {
            page: this.state.page,
            pageSize: this.state.pageSize
        }
        this.Fetch(params)
    }
    Fetch(params) {
        axios.get(urlList.getSignUpList,{
            params: params,
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => {
            //console.log(res)
            res.data.data.rows = res.data.data.rows.filter(row => row.name)
            this.setState({
                dataSource: res.data.data.rows,
                countAll: res.data.data.count,
                loading: false
            })
        })
    }
    render() {
        //分页
        let pagination = {
            showSizeChanger: true,
            pageSize: this.state.pageSize,
            defaultCurrent:1,
            total:this.state.countAll,
            onShowSizeChange:(current, pageSize) => {
                this.setState({
                    pageSize
                })
                let params = {
                    page:current,
                    pageSize:pageSize
                }
                this.Fetch(params)
            },
            onChange:(page, pageSize) => {
                let params = {
                    page,
                    pageSize
                }
                this.Fetch(params)
            }
        }
        return(
            <Table
            columns={COLUMNS}
            scroll={{x:1600,y: 600}}
            pagination={pagination}
            dataSource={this.state.dataSource}
            loading={this.state.loading}
            >

            </Table>
        )
    }
}