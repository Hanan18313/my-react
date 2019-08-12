import React from 'react';
import Table from '../common/Table';
import axios from 'axios';
import urlList from '../../public/js/Common'
import { Divider, Avatar, Tooltip, Pagination } from 'antd';

const columns = [
    {
        title: '姓名',
        dataIndex: 'user_name',
        width:200
    },
    {
        title: '公司',
        dataIndex: 'company',
        width:200,
    },
    {
        title: '联系方式',
        dataIndex: 'phone',
        width:200,
    },
    {
        title: '住址',
        dataIndex: 'address',
        width:200,
    },
    {
        title: '头像',
        dataIndex: 'portrait',
        width:200,
        render: (text, record) =>{
            return (
                <Avatar src={text}></Avatar>
            )
        }
    },
    {
        title: '竞猜答案',
        dataIndex: 'quiz_answer',
        width:200,
        
    },
    {
        title: '操作',
        key: 'action',
        fixed:'right',
        width:200,
        render: (text, record) => {
            return (
                <span>
                    <a href='javascript:;'>删除</a>
                    <Divider type='vertical' />
                    <a href='#/EditUserInfo'>编辑</a>
                </span>
            )
        }
    },
]



export default class ManageThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            loading: false,
            page: 1,
            pageSize: 30,
            countAll: 0,
            pagination:{}
        }
    }
    Fetch(params){
        axios.get(urlList.getUserAll,{
            params:params,
            headers:{
                'Content-Type':'application/json',
                'unionId':'123'
            },
        }).then(res => {
            this.setState({
                dataSource:res.data.rows,
                loading:false,
                countAll:res.data.count
            })
        })
    }
    componentDidMount() {
        let params = {
            page: this.state.page,
            pageSize: this.state.pageSize
        }
        this.Fetch(params)
        
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
        return (
            <div>
                <Table columns={columns} dataSource={this.state.dataSource} loading={this.state.loading} scroll={{x: 1500,y: 600}} pagination={pagination} />
            </div>
        )
    }
}